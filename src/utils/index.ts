
export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const isValidImageUrl = (url: string) => {
  const urlPattern = /^(https?:\/\/)[\da-z.-]+\.([a-z.]{2,6})([/\w .-]*\.(jpg|jpeg|png|gif|svg))$/i
  return urlPattern.test(url)
}