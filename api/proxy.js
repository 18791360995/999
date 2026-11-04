export default async function handler(req, res) {
        const TARGET_URL = 'https://thecurseddinosaurisle.com/api/v1/users/login_by_password';
            
                try {
                        const response = await fetch(TARGET_URL, {
                                    method: req.method,
                                                headers: { 
                                                                'Content-Type': 'application/json',
                                                                                'User-Agent': 'CursedIsle/++UE4+Release-4.27-CL-0 Android/13'
                                                                                            },
                                                                                                        body: req.method === 'POST' ? JSON.stringify(req.body) : undefined,
                                                                                                                });

                                                                                                                        const data = await response.text();
                                                                                                                                res.status(response.status).send(data);
                                                                                                                                    } catch (error) {
                                                                                                                                            res.status(500).json({ error: 'Proxy request failed' });
                                                                                                                                                }
                                                                                                                                                }
}