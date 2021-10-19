import { MovieItem, useMovies } from '../domains/movies';


export const Movies = () => {
    const {data} = useMovies()
    console.log("data Items", data)

    return (
        <div className="max-w-7xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
                <h1 className="text-5xl font-extrabold text-gray-900 sm:text-center">
                    Movies
                </h1>
            </div>
            <div className="bg-gray-50 lg:flex">
                <div className="flex-1">
                    {data && (
                        <div className="grid md:grid-cols-2 gap-x-4 gap-y-8 xl:grid-cols-3 xl:gap-x-6">
                            {data.map((item) => (
                                <MovieItem {...item} key={item._id} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
            {!data && (
                <div className="p-12 text-center text-3xl">Loading...</div>
            )}
        </div>
    );
};
