export default defineEventHandler(async (event) => {
  const { redirect = '/' } = getQuery(event)

  // Delete preview cookie
  deleteCookie(event, 'preview')

  // Redirect without preview param
  return sendRedirect(event, redirect as string)
})
