/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
export const createVote = /* GraphQL */ `
  mutation CreateVote(
    $input: CreateVoteInput!
    $condition: ModelVoteConditionInput
  ) {
    createVote(input: $input, condition: $condition) {
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
export const updateVote = /* GraphQL */ `
  mutation UpdateVote(
    $input: UpdateVoteInput!
    $condition: ModelVoteConditionInput
  ) {
    updateVote(input: $input, condition: $condition) {
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
export const deleteVote = /* GraphQL */ `
  mutation DeleteVote(
    $input: DeleteVoteInput!
    $condition: ModelVoteConditionInput
  ) {
    deleteVote(input: $input, condition: $condition) {
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
