const initialState = {
  movies: [
    {
      img: "https://i.pinimg.com/564x/f6/69/31/f6693121ec1b57222bda3d9bf1fa7358.jpg",
      name: " Frankenstein",
      year: "1957",
      star: 3,
      
      description: "The Curse of Frankenstein premiered in London on May 2, 1957 at Warner Theatre in Leicester Square.[12] It received a general released in the United Kingdom on May 20, 1957 where it was distributed by Warner Brothers and supported by the film Woman of Rome.",
      id:1

  },
  {
      img: "https://i.pinimg.com/564x/3c/e8/42/3ce8429cab613d9ff2a7b7c2395137e0.jpg",
      name: "the midnight hour",
      year: "1985",
      star: 4,
     
      description: "The Midnight Hour is a 1985 American made-for-television comedy horror film directed by Jack Bender and starring Shari Belafonte-Harper, LeVar Burton, Peter DeLuise, and Dedee Pfeiffer.",
      
      id:2

  },
  {
      img: "https://i.pinimg.com/564x/1b/7d/ff/1b7dff184ec616fdb4d6dc8ecd209ac3.jpg",
      name: "CAPÍTULO DOIS",
      year: "2019",
      star: 5,
      
      description: "Twenty-seven years after their first encounter with the terrifying Pennywise, the Losers Club have grown up and moved away, until a devastating phone call brings them back.",
      id:3

  },
  
],
  keyword: "",
  rate: 1,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "ADD_MOVIE":
      return {
        ...state,
        movies: [...state.movies, action.payload],
      };

    case "DELETE_MOVIE":
      return {
        ...state,
        movies: state.movies.filter((element) => element.id !== action.payload),
      };

    case "NAME_FILTER":
      return {
        ...state,
        keyword: action.payload,
      };

    case "RATING_FILTER":
      return {
        ...state,
        rate: action.payload,
      };

    case "EDIT_MOVIE":
      return {
        ...state,
        movies: state.movies.map((element) =>
          element.id === action.payload
            ? { ...element, isEditable: !element.isEditable }
            : element
        ),
      };

    case "UPDATE_MOVIE":
      return {
        ...state,
        movies: state.movies.map((element) =>
          element.id === action.payload.id
            ? {
                ...element,
                name: action.payload.name,
                img: action.payload.img,
                year: action.payload.year,
                star: action.payload.star,
                rate: action.payload.rate,
                description: action.payload.description,
              }
            : element
        ),
      };

    default:
      return state;
  }
}
