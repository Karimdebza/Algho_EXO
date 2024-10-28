import { BedRoom } from "./BedRoom";
import { Home } from "./Home";
import { Kitchen } from "./Kitchen";
import { LivingRoom } from "./LivingRoom";
import { Room } from "./Room";
import { Wc } from "./Wc";

const cuisine = new Kitchen("cuisine",13,12,false);
const chambre = new BedRoom("chambre",13,12,true);
const salon = new LivingRoom("salon",30,10,true);
const salon1 = new LivingRoom("salon1",30,10,true);
const douche = new BedRoom("douche",20,10,false);
const wc = new Wc("toillet1",10,20,false);
const wc2 = new Wc("toillet2",10,20,false);
const home = new Home();

home.addRoom(cuisine);
home.addRoom(chambre);

home.addRoom(salon);
home.addRoom(salon1);
home.addRoom(wc);
home.addRoom(wc2);
home.addRoom(douche);


console.log(home);