export default defineEventHandler(async (event) => {
  const { redirect = '/' } = getQuery(event)

  // Set preview cookie
  setCookie(event, 'preview', 'true', {
    httpOnly: false,
    sameSite: 'none',
    secure: true,
    maxAge: 60 * 60 * 24 // 24 hours
  })

  // Redirect with preview query param
  return sendRedirect(event, `${redirect}?preview=true`)
})
