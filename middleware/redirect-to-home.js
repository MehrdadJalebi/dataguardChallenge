export default function ({ route, redirect }) {
  if (route.fullPath === '/') {
    redirect('/tab1')
  }
}
