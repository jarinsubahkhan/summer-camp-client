import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const useSelected = () => {
    const {user} = useAuth();
    // const token = localStorage.getItem('access-token');

const [axiosSecure] = useAxiosSecure();

    const { refetch, data: selected = [] } = useQuery({
        queryKey: ['selected', user?.email],
        queryFn: async () => {
            const res = await axiosSecure(`/selected?email=${user?.email}`)
            console.log('res from axios', res)
            return res.data;
        },
      })

      return [selected, refetch]

}
export default useSelected;