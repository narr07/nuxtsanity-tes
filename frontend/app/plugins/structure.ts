import { CogIcon } from '@sanity/icons'
import type { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      // Settings Singleton
      S.listItem()
        .title('Settings')
        .icon(CogIcon)
        .child(
          S.document()
            .schemaType('settings')
            .documentId('settings')
        ),
      S.divider(),
      // Other document types
      ...S.documentTypeListItems().filter(
        (item) => !['settings'].includes(item.getId() || '')
      ),
    ])
