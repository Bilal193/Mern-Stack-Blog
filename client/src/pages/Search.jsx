import { Button, Select, Spinner, TextInput} from 'flowbite-react';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PostCard from '../components/PostCard';

export default function Search() {
    const [sidebarData, setSidebarData] = useState({
        searchTerm: '',
        sort: 'desc',
        categories: 'uncategorized',
    });
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showMore, setShowMore] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();


    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const searchTermFromUrl = urlParams.get('searchTerm');
        const sortFromUrl = urlParams.get('sort');
        const categoriesFromUrl = urlParams.get('categories');

        if (searchTermFromUrl || sortFromUrl || categoriesFromUrl) {
            setSidebarData({
            ...sidebarData,
            searchTerm: searchTermFromUrl,
            sort: sortFromUrl,
            categories: categoriesFromUrl,
            });
        }
        const fetchPosts = async () => {
            setLoading(true);
            const serachQuery = urlParams.toString();
            try {
                const response = await fetch(`/api/post/getposts?${serachQuery}`);
                setLoading(false);
                if (!response.ok) {
                    return;
                }
                if (response.ok) {
                    const data = await response.json();
                    setPosts(data.posts);
                    if (data.posts.length === 9) {
                        setShowMore(true);
                    } else {
                        setShowMore(false);
                    }
                }
                
            } catch (error) {
                console.error('Error fetching posts: ', error);
                setLoading(false);
            }
        };
        fetchPosts();
    }, [location.search]);


    const handleChange = (e) => {
        if (e.target.id === 'searchTerm') {
            setSidebarData({
                ...sidebarData,
                searchTerm: e.target.value,
            });
        }
        if (e.target.id === 'sort') {
            const order = e.target.value || 'desc';
            setSidebarData({
                ...sidebarData,
                sort: order,
            });
        }
        if (e.target.id === 'categories') {
            const categories = e.target.value || 'uncategorized';
            setSidebarData({
                ...sidebarData,
                categories,
            });
        }
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const urlParams = new URLSearchParams(location.search);
        urlParams.set('searchTerm', sidebarData.searchTerm);
        urlParams.set('sort', sidebarData.sort);
        urlParams.set('categories', sidebarData.categories);
        const searchQuery = urlParams.toString();
        navigate(`/search?${searchQuery}`);
    }


    const handleShowMore = async () => {
        const numberOfPosts = posts.length;
        const startIndx = numberOfPosts;
        const urlParams = new URLSearchParams(location.search);
        urlParams.set('startIndex', startIndx);
        const searchQuery = urlParams.toString();
        try {
            const response = await fetch(`/api/post/getposts?${searchQuery}`);
            if (!response.ok) {
                return;
            }
            if (response.ok) {
                const data = await response.json();
                setPosts([...posts, ...data.posts]);
                if (data.posts.length === 9) {
                    setShowMore(true);
                } else {
                    setShowMore(false);
                }
            }
        } catch (error) {
            console.error('Error fetching posts: ', error);
        }
    }

  return (
    <div className='flex flex-col md:flex-row'>
        <div className="p-7 border-b md:border-r md:min-h-screen border-gray-500">
            <form className='flex flex-col gap-8' onSubmit={handleSubmit}>
                <div className="flex items-center gap-2">
                    <label className='whitespace-nowrap font-semibold'>Search Term:</label>
                    <TextInput 
                        placeholder='Search...'
                        id='searchTerm'
                        type='text'
                        value={sidebarData.searchTerm}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex items-center gap-2">
                    <label className='font-semibold'>Sort</label>
                    <Select onChange={handleChange} value={sidebarData.sort} id='sort'>
                        <option value="desc">Latest</option>
                        <option value="asc">Oldest</option>
                    </Select>
                </div>
                <div className="flex items-center gap-2">
                    <label className='font-semibold'>categories</label>
                    <Select onChange={handleChange} value={sidebarData.categories} id='categories'>
                        <option value="uncategorized">Uncategorized</option>
                        <option value="javascript">Javascript</option>
                        <option value="reactjs">React.js</option>
                        <option value="vuejs">Vue.js</option>
                        <option value="nodejs">Node.js</option>
                        <option value="expressjs">Express.js</option>
                        <option value="mongodb">MongoDB</option>
                    </Select>
                </div>
                <Button type='submit' outline gradientDuoTone='purpleToPink'>Apply Filter</Button>
            </form>
        </div>
        <div className="w-full">
            <h1 className='text-3xl font-semibold sm:border-b border-gray-500 p-3 mt-5'>Posts Results</h1>
            <div className="p-7 flex flex-wrap justify-center gap-4">
                {!loading && posts.length === 0 && (<p className='text-xl text-gray-500'>No posts found.</p>)}
                {loading && (
                    <div className='flex justify-center items-center min-h-screen'>
                        <Spinner size="xl" />
                    </div>
                )}
                {!loading && posts && posts.map((post) => (<PostCard key={post._id} post={post} />))}
                {showMore && (<button onClick={handleShowMore} className='text-teal-500 text-lg hover:underline p-7 w-full'>Show more</button>)}
            </div>
        </div>
    </div>
  )
}
