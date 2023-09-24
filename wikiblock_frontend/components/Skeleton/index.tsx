import SkeletonNews from './SkeletonNews';

interface SkeletonInterface {
  News: typeof SkeletonNews;
}

const Skeleton: SkeletonInterface = {
  News: SkeletonNews,
};

export default Skeleton;
