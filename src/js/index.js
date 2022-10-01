import ".././style/style.scss";
import { addPost, addSinglePost } from "./createPost.js";
import { timeConverter } from "./unixTimeConverter.js";

const loadMoreBtn = document.querySelector(".loadmore");
const SPINNER_CONTAINER = document.querySelector(".spinner-container");

const API_URL = "https://hacker-news.firebaseio.com/v0/newstories.json";
let counterId = 0;

async function getNewStories(url) {
    let spinner = `<div class="spinner"></div>`;
    SPINNER_CONTAINER.innerHTML=spinner;
    try {
        const ID_LIST_RESPONSE = await axios.get(url)
        SPINNER_CONTAINER.innerHTML="";

        for(let i = 0; i<10; i++){
            getOneStory(ID_LIST_RESPONSE);
            counterId++;
        }
   } catch(err) {
        console.log(err)
   }
   
}

async function getOneStory(response){
    let storyId = response.data[counterId];

            let storyUrl = `https://hacker-news.firebaseio.com/v0/item/${storyId}.json`;
            try{
                const STORY_RESPONSE = await axios.get(storyUrl);
                let unixTime = STORY_RESPONSE.data.time;
                addSinglePost(STORY_RESPONSE, timeConverter(unixTime));
            }
            catch(err){
                console.log(err);
            }
}

getNewStories(API_URL);

loadMoreBtn.addEventListener("click", ()=>{
    getNewStories(API_URL);
})

