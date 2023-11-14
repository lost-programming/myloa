import axios from "axios";

axios.defaults.baseURL = 'https://developer-lostark.game.onstove.com/';
axios.defaults.headers.common['accept'] = 'application/json';
axios.defaults.headers.common['authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAxODY2MzcifQ.d_xyhIB8LKjaTlIXOuSdB7PQSYvoKrIeG18VmVrGBA9JxS6IDWYOh7kigcVrAUmayhej_INbALRArwDEJsMKrw0svFrG8vfs0PU4Ha3rwoiRsm-QzWvv4-Tya48OqPOM9I2rC623FY_xjGHFe3g82CfharQPsLfpwnZLqjJbJDDBMKVEdpQo1J4-PWugSFNT-vd6GHCPe4m3R13fFDgizlHpIdAHStb1pk5m4dReJ1zxSher8KGfM5VayEmdix0N73a86G_w3qtmbPdAsL6Hwe68pNUegMtkmQIQJ1CSOLV1bZzwYqB5z_BHm1vXFuSp79NsgTl4zMyIZ9ku7WGHtA';

export const getCharacterInfo = async (name: any) => {
  try {
    const response = await axios.get(`/armories/characters//${name}`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
