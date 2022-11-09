import {ref} from "vue"


export function usefetch(url, options){

  const data = ref(null);
  const state = reactive({
    error = null,
    loading = false
  });

const fetchData = async () => {
  state.loading = false
  try{
    const res = await fetch(url.options)
    data.value = await res.json();
  }catch(error){
    state.error = err;
  }finally{
    state.loading = false;
  }
}

  fetchData()
  return {data, ...toRefs(state) }
}