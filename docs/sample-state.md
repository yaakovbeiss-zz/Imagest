{
  posts: {

    1: {
      id: 1,
      title: "PhotoshoppedMichaelCeraEveryDay",
      description: "awesome description",
      points: 1000,
      author_id: "yaakovbeiss"
    }
    2: {
      id: 2,
      title: "SeeThatGuyOverThere",
      description: "he's pointing at us",
      points: 500,
      author_id: "yummybeiss"
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
      parent_id: [1,4,64,2,4,54],
      commentable_type: "comment",
      commentable_id: ""
    }
  }

  currentUser: {

    1: {
      id: 1,
      username: "yaakovbeiss",
      password_digest: "asdfas",
      session_token: "adfsadf"
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
