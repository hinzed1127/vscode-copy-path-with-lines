# Publishing to the VS Code Marketplace

Steps left before this extension is public. Steps 1-3 involve creating and holding
a credential, so they're yours to do.

1. Create/confirm an Azure DevOps organization at https://dev.azure.com.
2. Create a Personal Access Token (PAT) scoped to **Marketplace: Manage**.
3. Create the publisher:
   ```
   npx vsce create-publisher <id>
   ```
   or via https://marketplace.visualstudio.com/manage. This gives you the real
   publisher ID to replace the `"danhinze"` placeholder in `package.json`.
4. Update `package.json`'s `"publisher"` field to the real ID and commit.
5. Log in and publish:
   ```
   npx vsce login <publisher-id>   # prompts for the PAT
   npx vsce publish                # or `vsce publish patch` to bump the version
   ```

No icon is included by design — `vsce` will warn about it during packaging, but it
won't block publishing.
