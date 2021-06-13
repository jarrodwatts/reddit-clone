/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
      id
      title
      contents
      image
      createdAt
      updatedAt
      owner
      comments {
        items {
          id
          postID
          content
          createdAt
          updatedAt
          post {
            id
            title
            contents
            image
            createdAt
            updatedAt
            owner
          }
          owner
        }
        nextToken
      }
      votes {
        items {
          id
          vote
          postID
          createdAt
          updatedAt
          post {
            id
            title
            contents
            image
            createdAt
            updatedAt
            owner
          }
          owner
        }
        nextToken
      }
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
      id
      title
      contents
      image
      createdAt
      updatedAt
      owner
      comments {
        items {
          id
          postID
          content
          createdAt
          updatedAt
          post {
            id
            title
            contents
            image
            createdAt
            updatedAt
            owner
          }
          owner
        }
        nextToken
      }
      votes {
        items {
          id
          vote
          postID
          createdAt
          updatedAt
          post {
            id
            title
            contents
            image
            createdAt
            updatedAt
            owner
          }
          owner
        }
        nextToken
      }
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
      id
      title
      contents
      image
      createdAt
      updatedAt
      owner
      comments {
        items {
          id
          postID
          content
          createdAt
          updatedAt
          post {
            id
            title
            contents
            image
            createdAt
            updatedAt
            owner
          }
          owner
        }
        nextToken
      }
      votes {
        items {
          id
          vote
          postID
          createdAt
          updatedAt
          post {
            id
            title
            contents
            image
            createdAt
            updatedAt
            owner
          }
          owner
        }
        nextToken
      }
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
      id
      postID
      content
      createdAt
      updatedAt
      post {
        id
        title
        contents
        image
        createdAt
        updatedAt
        owner
        comments {
          items {
            id
            postID
            content
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        votes {
          items {
            id
            vote
            postID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      owner
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
      id
      postID
      content
      createdAt
      updatedAt
      post {
        id
        title
        contents
        image
        createdAt
        updatedAt
        owner
        comments {
          items {
            id
            postID
            content
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        votes {
          items {
            id
            vote
            postID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      owner
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
      id
      postID
      content
      createdAt
      updatedAt
      post {
        id
        title
        contents
        image
        createdAt
        updatedAt
        owner
        comments {
          items {
            id
            postID
            content
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        votes {
          items {
            id
            vote
            postID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      owner
    }
  }
`;
export const onCreateVote = /* GraphQL */ `
  subscription OnCreateVote {
    onCreateVote {
      id
      vote
      postID
      createdAt
      updatedAt
      post {
        id
        title
        contents
        image
        createdAt
        updatedAt
        owner
        comments {
          items {
            id
            postID
            content
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        votes {
          items {
            id
            vote
            postID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      owner
    }
  }
`;
export const onUpdateVote = /* GraphQL */ `
  subscription OnUpdateVote {
    onUpdateVote {
      id
      vote
      postID
      createdAt
      updatedAt
      post {
        id
        title
        contents
        image
        createdAt
        updatedAt
        owner
        comments {
          items {
            id
            postID
            content
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        votes {
          items {
            id
            vote
            postID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      owner
    }
  }
`;
export const onDeleteVote = /* GraphQL */ `
  subscription OnDeleteVote {
    onDeleteVote {
      id
      vote
      postID
      createdAt
      updatedAt
      post {
        id
        title
        contents
        image
        createdAt
        updatedAt
        owner
        comments {
          items {
            id
            postID
            content
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        votes {
          items {
            id
            vote
            postID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      owner
    }
  }
`;
