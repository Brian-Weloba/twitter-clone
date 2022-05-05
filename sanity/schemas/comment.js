export default {
  name: 'commnt',
  title: 'Comment',
  type: 'document',
  fields: [
    {
      name: 'comment',
      title: 'Comment',
      type: 'string',
    },
    {
      name: 'username',
      title: 'Username',
      type: 'string',
    },
    {
      name: 'profileImg',
      title: 'Profile Image',
      type: 'string',
    },
    {
      name: 'tweet',
      title: 'Tweet',
      description: 'Reference to the tweet this comment is on',
      type: 'reference',
      to: { type: 'tweet' },
    },
  ],
}
