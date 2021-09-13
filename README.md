# @mtfh/common

The common utility module for `@mtfh/root`.

## Considerations

The Utility Module is a `single-spa` module that is globally exposed at runtime, from which other microfrontends can `import` any exposed values.
So with this in mind it is not possible to have one microfrontend use a specific version of `@mtfh/common`, so we need to be quite careful around what is a candidate for inclusion in this module. Breaking changes introduced will need to be resolved in all microfrontends that consume it.

We explictily do not expose any endpoints, or business logic (with authentication as the exception) into this module to avoid problematic releases.

This is the checklist for a candidate:

- Your feature is used in more than 1 (preferably 2) microfrontends.
- Your feature requires little to no maintenance.
- Your feature includes no business logic, including any concept of Data Entities.
- Your feature introduces agreed best practices and contributes to the overall standards.

Change requests will require an impact assessment to determine viability.
All exports of this module are optional and should not block a team in their contributions to the project.

## Authentication

Authentication is currently implemented through Google OAuth.

On import of the library a `RxJs SharedBehaviour` instance is created of the decoded JWT auth cookie. Making available the `AuthUser`.

Your app can import this `$auth` instance and extract the current value.

```ts
import { $auth, AuthUser } from '@mtfh/common/lib/auth';

const user: AuthUser = $auth.getValue();
```

You are able to subscribe to changes to the `AuthUser`, useful for UI state changes.

```ts
const subscription = $auth.subscribe((authUser) => {
  console.log(authUser);
});

subscription.unsubscribe();
```

## Http

A custom instance of `axios` is exposed that is preconfigured with an interceptor to add an `Authorization` header, based off the authenticated user.

```ts
import { axiosInstance } from '@mtfh/common/lib/http';

axiosInstance.get('/url');
```

In addition it also provides the mechanism to cancel an axios request, without the need to import `axios` as a dependency into your project.

```ts
import { axiosInstance, createCancelToken } from '@mtfh/common';

const cancelTokenSource = createCancelToken();
axiosInstance.get('/url', { cancelToken: cancelTokenSource.token });

cancelTokenSource.cancel();
```

## React Components

The provided components are React components of [lbh-frontend](https://github.com/LBHackney-IT/lbh-frontend).

```tsx
import { Input } from '@mtfh/common/lib/components';
```

## React Hooks

The following hooks are available:

- useAxiosSWR
- useAxiosSWRInfinite
- useBreakpoint
- useFeatureToggle

```tsx
import { useFeatureToggle } from '@mtfh/common/lib/hooks';
```

## Architecture

The common library has manual code splitting in place, defined as entry points within webpack. These files get automatically marked as externals, so its important to import from the `@mtfh/common/lib/*` alias when cross importing. These are consolidated into the `import-map.json`, so made available at runtime.

When this library is installed in a micro-frontend its sole purpose is to satisfy tests as well as provide typings.

NB: Typescript does not support `package.json` `exports` yet, so we have to maintain the dist output to match the source. ie the usage of `lib`.
