//Auth token we will use to generate a meeting and connect to it
export const authToken =
 "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiI5YWY2MDMxOS0zZjRiLTRmOGQtOGY4Zi0wZmQ5YjdiODNiOGQiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTY4MDA4NzAyNywiZXhwIjoxNjgwNjkxODI3fQ.uGSih8dTME5mF2aGxogtvv-tjxg65-JyuB4WPFmS-qM";
// API call to create meeting
export const createMeeting = async ({ token }) => {
  const res = await fetch(`https://api.videosdk.live/v2/rooms`, {
    method: "POST",
    headers: {
      authorization: `${authToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });
  //Destructuring the roomId from the response
  const { roomId } = await res.json();
  return roomId;
};