

import { postType } from './postType'
import { page } from './documents/page'
import { settings } from './singletons/settings'
import { heroSection } from './blocks/heroSection'
import { contentSection } from './blocks/contentSection'
import { ctaSection } from './blocks/ctaSection'
import { cardGrid } from './blocks/cardGrid'
import { featuresSection } from './blocks/featuresSection'

export const schemaTypes = [
  // Singletons
  settings,
  // Documents
  page,
  postType,
  // Blocks
  heroSection,
  contentSection,
  ctaSection,
  cardGrid,
  featuresSection
]
