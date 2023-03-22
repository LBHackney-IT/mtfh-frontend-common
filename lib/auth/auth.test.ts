import { CommonAuth } from ".";
/*
 {
     "sub": "112895652611500752170",
     "email": "test@example.com",
     "iss": "Hackney",
     "name": "Tom Smith",
     "groups": ['TEST_GROUP']
  }
 */
const mockToken =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMTI4OTU2NTI2MTE1MDA3NTIxNzAiLCJlbWFpbCI6InRlc3RAZXhhbXBsZS5jb20iLCJpc3MiOiJIYWNrbmV5IiwibmFtZSI6IlRvbSBTbWl0aCIsImdyb3VwcyI6WyJURVNUX0dST1VQIl0sImp0aSI6IjRlZmUyMDA4LTc4NmMtNDE1Ni05MGJhLTJjM2UxMzk4ZDhmNSIsImlhdCI6MTYxODgyOTA5NSwiZXhwIjoxNjE4ODMyNjk1fQ.uXfOvdv5JiUUfRNMHWpdYDfqdyf8bWmzD3G4ns3lJPQ";

Object.defineProperty(window.document, "cookie", {
  writable: true,
  value: "",
});

Object.defineProperty(window, "location", {
  value: {
    href: "http://localhost/",
    origin: "http://localhost",
    reload: jest.fn(),
  },
  writable: true,
});

const auth = new CommonAuth();

describe("auth", () => {
  beforeEach(() => {
    window.document.cookie = "";
    auth.processToken();
    (window.location.reload as jest.Mock).mockReset();
  });

  test("user is not authenticated", () => {
    expect(auth.user.token).toBe("");
    expect(auth.isAuthorised()).toBe(false);
  });

  test("user is unauthenticated with incorrect cookie", () => {
    window.document.cookie = `hackneyToken=123456`;
    auth.processToken();

    expect(auth.user.token).toBe("");
    expect(auth.isAuthorised()).toBe(false);
  });

  test("user is authenticated", () => {
    window.document.cookie = `hackneyToken=${mockToken}`;
    auth.processToken();

    expect(auth.user.token).toBe(mockToken);
    expect(auth.user.name).toBe("Tom Smith");
    expect(auth.user.email).toBe("test@example.com");
    expect(auth.user.groups).toContain("TEST_GROUP");
    expect(auth.isAuthorised()).toBe(true);
    expect(auth.isAuthorisedForGroups(["TEST_GROUP"])).toBe(true);
    expect(auth.isAuthorisedForGroups(["not-a-users-group"])).toBe(false);
  });

  test("login clears state and redirects to auth", () => {
    window.document.cookie = `hackneyToken=${mockToken}`;
    auth.processToken();
    auth.login();

    expect(auth.user.token).toBe("");
    expect(window.location.href).toContain("//auth.hackney.gov.uk/auth");
  });

  test("logout clears cookie and state", () => {
    window.document.cookie = `hackneyToken=${mockToken}`;
    auth.processToken();

    expect(auth.user.token).toBe(mockToken);
    auth.logout();

    const { email, name, groups, token } = auth.user;
    expect(token).toBe("");
    expect(email).toBe("");
    expect(name).toBe("");
    expect(groups).toEqual([]);
    expect(window.location.reload).toBeCalledTimes(1);
  });
});
