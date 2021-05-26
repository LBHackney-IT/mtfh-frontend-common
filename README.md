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
import { $auth, AuthUser } from '@mtfh/common';

const user: AuthUser = $auth.getValue();
```

You are able to subscribe to changes to the `AuthUser`, useful for UI state changes.

```ts
const subscription = $auth.subscribe((authUser) => {
  console.log(authUser);
});

subscription.unsubscribe();
```

## Api

A custom instance of `axios` is exposed that is preconfigured with an interceptor to add an `Authorization` header, based off the authenticated user.

```ts
import { axiosInstance } from '@mtfh/common';

axiosInstance.get('/url');
```

In addition it also provides the mechanism to cancel an axios request, without the need to import `axios` as a dependency into your project.

```ts
import { axiosInstance, createCancelToken } from '@mtfh/common';

const cancelTokenSource = createCancelToken();
axiosInstance.get('/url', { cancelToken: cancelTokenSource.token });

cancelTokenSource.cancel();
```

## Components

The provided components are generic Design System approved React components. More to come as we develop.

### Input

```ts
export interface InputProps {
  as?: ElementType;
  error?: boolean;
}
```

```tsx
import { Input } from '@mtfh/common';

<Input id="date-of-birth" name="dateOfBirth" type="text" />;
```

### Select

```ts
export interface SelectProps {
  as?: ElementType;
  error?: boolean;
  isFullWidth?: boolean;
}
```

```tsx
import { Select } from '@mtfh/common';

<Select id="sort" name="sort">
  <option value="a-z">A-Z</option>
  <option value="z-a">Z-A</option>
</Select>;
```

### FormGroup

```ts
interface FormGroupProps {
  as: ElementType;
  id: string;
  name: string;
  label: string;
  hint?: string;
  error?: string | false;
  required?: boolean;
  children: ReactElement;
}
```

```tsx
import { FormGroup, Input } from '@mtfh/common';

<FormGroup id="search" name="search" label="Search Input">
  <Input />
</FormGroup>;
```

## Eslint

The `.eslintrc` rules defined here are a good basis to extend from for a microfrontend. This helps us maintain a consistent coding style across the separate repos and team members.

```json
{
  "extends": ["./node_modules/@mtfh/common/.eslintrc"],
  "parserOptions": {
    "project": "./tsconfig.json",
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  }
}
```

### VSCode support

It's handy to get the `eslint` vscode extension to apply fixes automatically to reduce friction on the rules.

```json
// .vscode/settings.json
{
  "typescript.tsdk": "node_modules/typescript/lib",
  "eslint.packageManager": "yarn",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "html"
  ]
}
```
