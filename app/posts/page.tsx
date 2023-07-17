import React from 'react';

import List from '@/components/list/list';

const PostPage = ({ ListingComponent = List }) => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <h1>Posts</h1>
      <ListingComponent />
      <p>Lorem, ipsum dolor.</p>
    </div>
  );
};

export default PostPage;
