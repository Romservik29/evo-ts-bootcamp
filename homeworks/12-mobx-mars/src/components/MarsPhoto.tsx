import { observer } from 'mobx-react-lite';
import { Photo } from '../app/types';

import Heart from './Heart';

type MarsPhotoPros = {
  photo: Photo
};

export default observer<MarsPhotoPros>(({ photo }) => {
  return (
    <div style={{ position: 'relative' }}>
      <div className="center">
        <Heart photoId={photo.id} />
      </div>
      <img src={photo.img_src} alt={photo.rover.name} width="100%" height="100%" />
    </div>
  );
})
