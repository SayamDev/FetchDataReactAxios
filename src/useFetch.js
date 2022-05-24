import { useEffect, useState } from "react";
import axios from "axios";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  const refetch = () => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

 

  return { data, loading, error, refetch };
}

export default useFetch;

//hook is component that doesn't return JSX so no ui
//you only return data or states when u call the hook
//so you want to make an api call whenever we make this call
//this is done by using the custom hook called useEffect (instantly gets feedback)
//useEffect= triggers a function inside of it  based on the fact that the useFetch component was just rendered
//inside the useEffect u want to make a call of the API
//you can either use axios or fetch that comes with JS
//for this purpose i have installed axios = npm i axios
//then i am going to import it
//then i want to make an api call by saying axios.get
//then passing the url to our API endpoint = https://v2.jokeapi.dev/joke/Any
// but the problem is we want to reuse the useFetch hook throughout the application for many API endpoints
//so were not directly putting the link inside (not hardcoding it)
//instead we are going to grab arguments in the useFetch component
// function useFetch (url)
//now we can pass whenever we want to fetch new data
//therefore i am going to pass in the url argument in the axios.get function
//then after we make the api call we get the data and want to deal the data inside of it
//then is also a built in axios
//then()
//to grab the data we grab the response
//remember the re are 3 states ; the data, loading, error
//we are going to have those states but it will be inside the hook
//so you don't need to recreate them every single time when you want to make any other api calls
// this is the state that i will be creating
//const [data, setData] = useState(null)
//breakdown of the useState: we have initialised null because we don't know what type of data we are dealing with
//because we might receive data is an array  or object so that's we are initialising it as null at the moment
//the name of the state will be data
// the function that alters that state will be called 'setData'
//const [data,setData] = useState(null)
//Then i am going to create another 2 states #; the state that will say the data is loading and another state that it will say if any errors occur

//so loading will be false because we know loading will be a boolean

// let's think about it this way we have our api request  and we're making the request
// when do we want to set loading to true ? how do we determine when the actual api call is being made ? and when it's done?

// well this over here is happening in a way so that we wait for this to happen= axios.get(url).then((response) =>

// to then um continue forwards right so

// before we actually make the api request , we set a loading to be equal to true
//setLoading(true);

//then inside of the axios we deal with our data by setData(response.data), so we're actually setting our data that we get from the request
//then we can catch any errors that occur in the API request  .catch(() =>
//and then what we do witht the catch is setError to the error we grab from catch
// .catch((err) => {
 //   setError(err);
//});

//after all of this is done 


//overall 
//it tried making the request if it suceeded    
//    .get(url)
//       .then((response) => {
//         setData(response.data);

//then sets the data to the data that was returned from the api request
//setData(response.data);

//and if there were any errors, it would then send an error message
// .catch((err) => {
//     setError(err);
//   });



//but we want to set loading to false regardless of its suceeded or if there was any errors, 
//so when you have a promise you can do that by passing the built in finally (this is a callback to execute when the Prmise is settled (fullfilled or rejected))
// .finally(()=> {

//then inside the finally function we set the setLoading to false
// setLoading(false)


//then the useEffect does need a dependancy array, the dependandcy we need is the url
// becasue if the url changes then we want to request the new data ,[url]);



//thats pretty much it for having a useEffect


//now we need to return the 3 states that we actually created inside of the hook
//i am going to retun an object and the object wil contain 3states the data , loading ,error

// return {data, loading, error

//now what we can do is instead of any other compopnent in the application, we can easily just make a call to that hook by calling it useFetch (i will be doing this in the App.js)
//import './App.css';
// import useFetch from './useFetch';

// function App () {
//   const {} =useFetch()
//   return (
//     <div className='App'>

//     </div>
//   )
// }



// export default App;


//then we need to pass in the url to the our api 

// const {} =useFetch("https://v2.jokeapi.dev/joke/Any")


//over here , now we can destrucutre the data or the loading or the error, but we don't need to access all of it 
//  const {data, loading, error} =useFetch("https://v2.jokeapi.dev/joke/Any")
//but we will be grabbing the data




//now we want to handle this well we want to make the api call when we refresh the page or when we enter the page so we need to check if the data is loading


//now we do want to check the page if the data is loading  (in App.js)
//if(loading) return <h1>Loading...</h1>; (just got a h1 saying loading )
//if(error) console.log(error); (just to see if ther are any errors)
//inside the h1 tag i want to display the joke =    <h1>{data}</h1> passing in the data to access the data
//since we don't know if data is going to be null or true whwat we do is put a question mark which represents if data is actually not null (if data hasn't arrived yet thats we put the question mark)
/* <h1>{data?}</h1> */
//then we write .setup because if you go to the api's endpoint you'll see that we have the setup propertu which is inside of the object
//<h1>{data?.setup}</h1>
// saved in screenpresso = api endpoint.png
//we also have the endpoint delivery
/* <h1>{data?.setup} : {data?.delivery}</h1> */















//we can also create functions that trigger the api call when u click on a button

// useFetcj.js


// const refetch = () => {
//     setLoading(true);
//     axios
//       .get(url)
//       .then((response) => {
//         setData(response.data);
//       })
//       .catch((err) => {
//         setError(err);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   };




//App.js


// function App () {
//     const {data, loading, error, refetch} =useFetch("https://v2.jokeapi.dev/joke/Any");
//     if(loading) return <h1>Loading...</h1>;
  
//     if(error) console.log(error);
  
//     return (
//       <div className='App'>
//         <h1>{data?.setup} : {data?.delivery}</h1>
  
//         <button onClick={refetch}>Refetch</button>
//       </div>
//     )
//   }