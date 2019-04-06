const mongoose = require('mongoose');
const db = require('../models');

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/captionthis');

const captionSeed = [
  {
    src: 'https://i.ytimg.com/vi/yV_wA62bbtk/maxresdefault.jpg',
    captions: [{ body: 'Add a Caption', date: new Date(Date.now()) }],
  },
  {
    src:
      'http://www.henspark.com/wp-content/uploads/2018/01/Success-Kid-Meme.jpg',
    captions: [{ body: 'Add a Caption', date: new Date(Date.now()) }],
  },
  {
    src: 'https://i.ytimg.com/vi/ePREI8Qqi0Y/maxresdefault.jpg',
    captions: [{ body: 'Add a Caption', date: new Date(Date.now()) }],
  },
  {
    src:
      'https://blazepress.com/.image/c_fit%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1280/assets/MTMzOTMyODIzNDkxOTQyODc4/funny-section-heading.jpg',
    captions: [{ body: 'Add a Caption', date: new Date(Date.now()) }],
  },
  {
    src:
      'http://images.agoramedia.com/EHBlogImages/therese-borchard/2017/02/Funny-Movies-That-Help-Lift-Your-Depression-RM-1440x810.jpg',
    captions: [{ body: 'Add a Caption', date: new Date(Date.now()) }],
  },
  {
    src:
      'http://www.clydefitchreport.com/wp-content/uploads/2016/04/cptpicardmeme-1.jpg',
    captions: [{ body: 'Add a Caption', date: new Date(Date.now()) }],
  },
  {
    src:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/curious-puppy-lying-on-the-floor-and-looking-at-royalty-free-image-538354162-1546530956.jpg',
    captions: [{ body: 'Add a Caption', date: new Date(Date.now()) }],
  },
  {
    src: 'https://i.ytimg.com/vi/mW3S0u8bj58/maxresdefault.jpg',
    captions: [{ body: 'Add a Caption', date: new Date(Date.now()) }],
  },
  {
    src:
      'https://cdn.vox-cdn.com/thumbor/QFeJgQBO4ZIGALw23Ru5NYs72X8=/0x0:3600x2400/1200x800/filters:focal(1254x752:1830x1328)/cdn.vox-cdn.com/uploads/chorus_image/image/49605955/silicon_20valley_20season_203_20episode_204_20feature_20image.0.jpeg',
    captions: [{ body: 'Add a Caption', date: new Date(Date.now()) }],
  },
  {
    src:
      'https://pixel.nymag.com/imgs/daily/vulture/2012/10/05/05-americas-funniest-home-videos-park.jpg',
    captions: [{ body: 'Add a Caption', date: new Date(Date.now()) }],
  },
  {
    src:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMWUlepf8rJYNysmKzI6eKMIEf-339ZJrb-JvIpRNrh7MZAMRqjA',
    captions: [{ body: 'Add a Caption', date: new Date(Date.now()) }],
  },
  {
    src:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeL1FkW0FHMIDFxLpb5-KMyboB4knixWdkyhYIjR9XYEsbISIw',
    captions: [{ body: 'Add a Caption', date: new Date(Date.now()) }],
  },
  {
    src:
      'https://static.wixstatic.com/media/6b0132_c4986846816b4f41b6ddc811b67b04e0~mv2.png/v1/fill/w_1600,h_868,al_c,q_90/file.jpg',
    captions: [{ body: 'Add a Caption', date: new Date(Date.now()) }],
  },
  {
    src:
      'https://i1.wp.com/digital-photography-school.com/wp-content/uploads/2017/09/frenchieactionshot.jpg?resize=750%2C501&ssl=1',
    captions: [{ body: 'Add a Caption', date: new Date(Date.now()) }],
  },
  {
    src:
      'https://upload.wikimedia.org/wikipedia/commons/5/55/Faceball_Action_Shot.jpg',
    captions: [{ body: 'Add a Caption', date: new Date(Date.now()) }],
  },
  {
    src:
      'https://i.swncdn.com/cdn/768w/godvine/uploads/2016/07/image_1468331839_godvine_corgi_pool_party.jpg',
    captions: [{ body: 'Add a Caption', date: new Date(Date.now()) }],
  },
];

db.Data.remove({})
  .then(() => db.Data.collection.insertMany(captionSeed))
  .then(data => {
    console.log(data.result.n + ' records inserted!');
    // process.exit(0);  If you uncomment it will kill the node server.
  })
  .catch(err => {
    console.error(err);
    // process.exit(1);  If you uncomment it will kill the node server.
  });
