# NextJS template with Shadcn

This is a basic template using NextJS and Shadcn as a ui-kit with Turborepo

## Requirements

- Docker
- Supabase CLI
- nvm

## Getting started

1. Start local supabase from root
    ```
    supabase start --workdir ./apps/shadcn-supabase
    ```

2. Run app
    ```
    yarn dev --filter @repo/shadcn-supabase
    ```

## Troubleshooting

#### I have a problem with imports

Make sure the ui-kit package is added to your `package.json`

_There should be something like `"<name_of_your_ui_kit_pkg>": "*"` in your dependencies_

#### The styles are not applied when I import the global style from the ui-kit package

Make sure the path to your ui-kit package is added to the `content` in the app `tailwind.config.ts`

\_There should be something like `"../../packages/shadcn/src/**/*.{ts,tsx}"` in your `content`
