export default {
  async login(context, payload) {
    const rootUsername = context.getters.username
    const rootPassword = context.getters.password

    if (
      payload.username !== rootUsername ||
      payload.password !== rootPassword
    ) {
      const error = new Error('Failed to authenticate.')
      throw error
    }

    console.log('Login sucessfull')
  },
}
