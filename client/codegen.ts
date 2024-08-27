
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:4000/graphql",
  documents: "src/gql/operations/**/*.graphql",
  generates: {
    'src/gql/generated/generated.tsx': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo']
    }
  },
  hooks: { afterAllFileWrite: ['eslint --fix'] }
};

export default config;
