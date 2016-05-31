/* eslint no-console: 0 */
import Poll from './models/poll';

export default function () {
  Poll.count().exec((err, count) => {
    if (count > 0) {
      return;
    }

    const poll1 = new Poll({
      name: 'Xander', title: 'Favorite Toy', slug: 'favorite-toy',
      cuid: 'cikqgkv4q01ck7453ualdn3hg',
      options: [{ option: 'train', votes: 0 }, { option: 'bike', votes: 1 }]
    });
    const poll2 = new Poll({
      name: 'Emily', title: 'Favorite Show', slug: 'favorite-show',
      cuid: 'cikqgkv4q01ck7453ualdn3hh',
      options: [{ option: 'titans', votes: 0 }, { option: 'ladybug', votes: 1 }]
    });

    Poll.create([poll1, poll2], (error) => {
      if (!error) {
        console.log('creating Polls');
      } else {
        console.log('error creating Polls', error);
      }
    });
  });
}
