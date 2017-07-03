{
  currentUser: {
    1: {
      id: 1,
      username: "yaakovbeiss",
    }
  }
  posts: {
    1: {
      id: 1,
      title: "PhotoshoppedMichaelCeraEveryDay",
      description: "awesome description",
      points: 1000,
      account_id: "yaakovbeiss",
      comment_ids: [1,2,3]
    }
    2: {
      id: 2,
      title: "SeeThatGuyOverThere",
      description: "he's pointing at us",
      points: 500,
      account_id: "yummybeiss",
      comment_ids: [1,2,3]
    }
  }
  images: {
    1: {
      id: 1,
      post_id: 23,
      image_url: "http://i.imgur.com/CGQvGvL.mp4",
      title: "dad joke video",
      description: "funny joke"
    }
  }
  comments: {
    1: {
      id: 1,
      body: "blah blah",
      points: 50,
      commenter_id: "yaakovbeiss",
      commentable_type: "comment",
      commentable_id: "",
      comment_ids: [1,2,3]
    }
  }
  votings: {
    1: {
      id: 1,
      voter_id: 1,
      votable_id: 3,
      voted_type: ""
    }
  }
}
