import * as postAPI from '../api/posts'; // api/posts 안의 함수 모두 불러오기

/* 액션 타입 */


// 포스트 여러개 조회하기
const GET_POSTS = 'GET_POSTS'; // 요청 시작
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'; // 요청 성공
const GET_POSTS_ERROR = 'GET_POSTS_ERROR'; // 요청 실패

// 포스트 하나 조회하기
const GET_POST = 'GET_POST'; // 요청 시작
const GET_POST_SUCCESS = 'GET_POST_SUCCESS'; // 요청 성공
const GET_POST_ERROR = 'GET_POST_ERROR'; // 요청 실패

// thunk 를 사용 할 때, 꼭 모든 액션들에 대하여 액션 생성 함수를 만들 필요가 없다.
const initialState = {
  posts: {
    loading: false,
    data: null,
    error: null
  },
  post: {
    loading: false,
    data: null,
    error: null,
  }
}

export default function posts(state = initialState, action) {
  switch (action.tyoe) {
    case GET_POSTS:
      return {
        ...state,
        posts: {
          loading: true,
          data: null,
          error: null,
        }
      }
    case GET_POSTS:
      return {
        ...state,
        posts: {
          loading: true,
          data: null,
          error: null,
        }
      }
    case GET_POSTS:
      return {
        ...state,
        posts: {
          loading: true,
          data: null,
          error: null,
        }
      }
    default: return state;
  }

}