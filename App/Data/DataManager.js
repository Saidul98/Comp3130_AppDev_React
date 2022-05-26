import { useTransitionProgress } from "react-native-screens";

export default class DataManager {
    static myInstance = null;
    userID ="";
    category ="";
    
    pics=[
        {
            userid:"1",
            picsID:"1",
            title:"Wonders of Bali",
            detail:"Nothing can beat the beach of bali. It's like a little heaven",
            location: "Bali",
            image:require('../assets/beach.jpg'),
            category: "Nature",
        },
        {
            userid:"1",
            picsID:"2",
            title:"African Beef BBQ",
            detail:"Everyone should try this place in gazeland, Melbourne",
            location: "Melbourne",
            image:require('../assets/beef_bbq.jpg'),
            category: "Food",
        },
        {
            userid:"1",
            picsID:"3",
            title:"Bondi Beach",
            detail:"The first day of the year with my family",
            location: "Bondi",
            image:require('../assets/bondi.jpg'),
            category: "Family",
        },
        {
            userid:"1",
            picsID:"4",
            title:"Brazil vs Spain",
            detail:"Blue yellow green I hope u win",
            location: "Spain",
            image:require('../assets/brazil.jpg'),
            category: "Event",
        },
        {
            userid:"1",
            picsID:"5",
            title:"Family Time",
            image:require('../assets/iceland.jpg'),
            category: "Family",
        },
        {
            userid:"1",
            picsID:"6",
            title:"Short visit to Himachal",
            image:require('../assets/india-hambloch.jpg'),
            category: "Nature",
        },
        {
            userid:"1",
            picsID:"7",
            title:"Best Autumn",
            image:require('../assets/japan.jpg'),
            category: "Nature",
        },
        {
            userid:"1",
            picsID:"8",
            title:"Malaysia",
            image:require('../assets/malaysia.jpg'),
            category: "Event",
        },
        {
            userid:"1",
            picsID:"9",
            title:"Happy New Year",
            image:require('../assets/new_year_fireworks.jpg'),
            category: "Event",
        },
        {
            userid:"2",
            picsID:"10",
            title:"Pancake on the Rocks",
            image:require('../assets/pancake.jpg'),
            category: "Food",
        },
        {
            userid:"2",
            picsID:"11",
            title:"Tasmanian Salmon",
            image:require('../assets/salmon.jpg'),
            category: "Food",
        },
        {
            userid:"2",
            picsID:"12",
            title:"Fresh Strawberry",
            image:require('../assets/strawberries.jpg'),
            category: "Food",
        },
        {
            userid:"2",
            picsID:"13",
            title:"Big Day",
            image:require('../assets/wedding.jpg'),
            category: "Event",
        },
        {
            userid:"2",
            picsID:"14",
            title:"Mother Nature",
            image:require('../assets/glacier.jpg'),
            category: "Nature",
        },
    ]

    users = [
        {
        userid:"1",
        username: "user1",
        useremail: "user1@gmail.com",
        password: "pass1",
        userimage: require('../assets/lionel-messi.jpg'),
        },
        {
        userid:"2",
        username: "user2",
        useremail: "user2@gmail.com",
        password: "pass2"
        },
        {
        userid:"3",
        username: "user3",
        useremail: "user3@gmail.com",
        password: "pass3",
        },
        {
        userid:"4",
        username: "user4",
        useremail: "user4@gmail.com",
        password: "pass4",
        }
    ]

    static getInstance() {
        if (DataManager.myInstance == null){
            DataManager.myInstance = new DataManager();
        }
        return this.myInstance;
    };

    getPics(id) {
        return this.pics.filter((pics)=>pics.userid === id);
    }

    addPic(pic){
        this.pics.push(pic);
    }

    filterpics(id, category){
        return  this.pics.filter((pics) => pics.userid === id && pics.category === category);
    }

    deletePic(picid){
        return this.pics.splice(pics.indexOf(picid), 1);
        
    }

    setCategory(category){
        this.category =category;
    }

    getCategory(){
        return this.category;
    }


    getuser(id){
        return this.users.filter((user)=>user.userid === id);
    }

    getUser() {
        return this.users;
    }

    addUser(user){
        this.users.push(user);
    }




    setUserID(id){
        this.userID =id;
    }

    getUserID(){
        return this.userID;
    }
   

}