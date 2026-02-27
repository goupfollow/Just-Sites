// Firebase Config
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

const loginBtn = document.getElementById("googleLogin");
if(loginBtn){
  loginBtn.addEventListener("click",()=>{
    auth.signInWithPopup(provider)
    .then(()=>{
      window.location.href="dashboard.html";
    });
  });
}

auth.onAuthStateChanged(user=>{
  if(user){
    const userName = document.getElementById("userName");
    if(userName){
      userName.innerText = "Welcome " + user.displayName;
    }
  }
});

const logoutBtn = document.getElementById("logoutBtn");
if(logoutBtn){
  logoutBtn.addEventListener("click",()=>{
    auth.signOut().then(()=>{
      window.location.href="index.html";
    });
  });
}
