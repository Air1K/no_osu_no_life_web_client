import React, {memo} from 'react';

const Discussions = memo(() => {
    console.log("рендер Discussion")
    return (
        <div>
            Обсуждения
        </div>
    );
});

export default Discussions;