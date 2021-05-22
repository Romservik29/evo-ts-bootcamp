/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { addToFavorites, removeFromFavorites } from '../features/marsGallery/marsGallerySlice';

type HeartProps = {
  photoId: number,
};

export default function Heart({ photoId }: HeartProps): JSX.Element {
  const dispatch = useDispatch();
  const like = useSelector(
    ((state: RootState) => state.mars.favorites.some((id) => id === photoId)),
  );
  const likeToggle = () => {
    like || dispatch(addToFavorites(photoId));
    like && dispatch(removeFromFavorites(photoId));
  };
  return (
    <svg x="0px" y="0px" viewBox="0 0 502 502" width="64" height="64" style={{ cursor: 'pointer' }} onClick={likeToggle}>
      <g>
        <g>
          <path fill={like ? 'red' : 'grey'} fillOpacity={like ? 1 : 0.25} d="M370.994,49.998c-61.509,0-112.296,45.894-119.994,105.306    c-7.698-59.412-58.485-105.306-119.994-105.306C64.176,49.998,10,104.174,10,171.004s80.283,135.528,116.45,166.574    C160.239,366.582,251,452.002,251,452.002s90.761-85.42,124.55-114.424C411.717,306.532,492,237.834,492,171.004    S437.824,49.998,370.994,49.998z" />
          <path d="M251,462.002c-2.464,0-4.928-0.906-6.854-2.718c-0.906-0.853-90.981-85.595-124.21-114.119l-0.348-0.299    C80.771,311.548,0,242.216,0,171.004C0,98.767,58.769,39.998,131.006,39.998c52.959,0,99.547,31.914,119.994,78.382    c20.446-46.468,67.035-78.382,119.994-78.382C443.231,39.998,502,98.767,502,171.004c0,71.211-80.771,140.543-119.588,173.862    l-0.348,0.299c-33.231,28.525-123.304,113.266-124.21,114.119C255.928,461.096,253.464,462.002,251,462.002z M131.006,59.998    C69.797,59.998,20,109.795,20,171.004c0,62.021,78.917,129.761,112.615,158.687l0.348,0.299    c28.14,24.155,96.205,87.815,118.037,108.294c21.832-20.479,89.897-84.139,118.037-108.294l0.348-0.299    C403.083,300.765,482,233.025,482,171.004c0-61.209-49.797-111.006-111.006-111.006c-55.619,0-102.941,41.525-110.077,96.591    c-0.646,4.984-4.891,8.715-9.917,8.715s-9.271-3.73-9.917-8.715C233.948,101.523,186.625,59.998,131.006,59.998z" />
        </g>
        <g>
          <path d="M252.008,412.021c-2.445,0-4.895-0.891-6.823-2.691c-26.934-25.15-75.469-70.218-97.909-89.48l-0.304-0.261    c-3.771-3.237-8.046-6.907-12.652-10.936c-4.157-3.636-4.58-9.954-0.943-14.11c3.635-4.158,9.953-4.58,14.11-0.943    c4.536,3.967,8.773,7.604,12.512,10.813l0.304,0.261c21.578,18.523,65.492,59.187,98.532,90.038    c4.037,3.77,4.253,10.097,0.484,14.134C257.35,410.955,254.682,412.021,252.008,412.021z" />
        </g>
        <g>
          <path d="M113.283,285.803c-2.51,0-5.021-0.938-6.964-2.825c-6.611-6.417-12.866-12.804-18.592-18.982    c-3.754-4.05-3.514-10.377,0.537-14.132c4.05-3.754,10.377-3.514,14.132,0.537c5.488,5.921,11.495,12.053,17.854,18.227    c3.963,3.847,4.057,10.178,0.21,14.141C118.498,284.788,115.892,285.803,113.283,285.803z" />
        </g>
      </g>
    </svg>
  );
}
