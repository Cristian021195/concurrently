import { useEffect, useState } from "react";

export function useFetch(url, customHeader = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(url, {headers: {'Content-Type':'application/json', ...customHeader}})
    .then(res=>res.json())
    .then((response) => {
        setData(response.data);
    })
    .catch((err) => {
        setError(err);
    })
    .finally(() => {
        setLoading(false);
    });
  }, [url]);

  const refetch = () => {
    setLoading(true);
    fetch(url)
    .then(res=>res.json())
    .then((response) => {
        setData(response.data);
    })
    .then((response) => {
        setData(response.data);
    })
    .catch((err) => {
        setError(err);
    })
    .finally(() => {
        setLoading(false);
    });
  };

  return { data, loading, error, refetch };
}

export function useFetchPost(url, jsonData, customHeader = {}) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      setLoading(true);
      fetch(url, {
        method:'POST',
        headers: {'Content-Type':'application/json', ...customHeader},
        body:JSON.stringify(jsonData)
    })
      .then(res=>res.json())
      .then((response) => {
          setData(response.data);
      })
      .catch((err) => {
          setError(err);
      })
      .finally(() => {
          setLoading(false);
      });
    }, [url]);
  
    const refetch = () => {
      setLoading(true);
      fetch(url)
      .then(res=>res.json())
      .then((response) => {
          setData(response.data);
      })
      .then((response) => {
          setData(response.data);
      })
      .catch((err) => {
          setError(err);
      })
      .finally(() => {
          setLoading(false);
      });
    };
  
    return { data, loading, error, refetch };
}

export function useFetchPut(url, jsonData, customHeader = {}) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      setLoading(true);
      fetch(url, {
        method:'PUT',
        headers: {'Content-Type':'application/json', ...customHeader},
        body:JSON.stringify(jsonData)
    })
      .then(res=>res.json())
      .then((response) => {
          setData(response.data);
      })
      .catch((err) => {
          setError(err);
      })
      .finally(() => {
          setLoading(false);
      });
    }, [url]);
  
    const refetch = () => {
      setLoading(true);
      fetch(url)
      .then(res=>res.json())
      .then((response) => {
          setData(response.data);
      })
      .then((response) => {
          setData(response.data);
      })
      .catch((err) => {
          setError(err);
      })
      .finally(() => {
          setLoading(false);
      });
    };
  
    return { data, loading, error, refetch };
}

export function useFetchDelete(url, jsonData, customHeader = {}) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      setLoading(true);
      fetch(url, {
        method:'DELETE',
        headers: {'Content-Type':'application/json', ...customHeader},
        body:JSON.stringify(jsonData)
    })
      .then(res=>res.json())
      .then((response) => {
          setData(response.data);
      })
      .catch((err) => {
          setError(err);
      })
      .finally(() => {
          setLoading(false);
      });
    }, [url]);
  
    const refetch = () => {
      setLoading(true);
      fetch(url)
      .then(res=>res.json())
      .then((response) => {
          setData(response.data);
      })
      .then((response) => {
          setData(response.data);
      })
      .catch((err) => {
          setError(err);
      })
      .finally(() => {
          setLoading(false);
      });
    };
  
    return { data, loading, error, refetch };
}