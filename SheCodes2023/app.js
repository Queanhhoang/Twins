var html = (s) => s.join();
const routes = {
  "/friends": friends,
  "/team": team,
  "/contact": contact,
  "/home": home,
  // "/about": about,
  // "/goal": goal,
  // "/community": community,
};

const rootDiv = document.getElementById("root");
rootDiv.innerHTML = routes[location.pathname];

const onNavigate = (pathname) => {
  window.history.pushState({}, pathname, location.origin + pathname);
  rootDiv.innerHTML = routes[pathname];
};

window.onpopstate = () => {
  rootDiv.innerHTML = routes[window.location.pathname];
};
