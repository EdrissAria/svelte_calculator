import ghpages from 'gh-pages';

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/EdrissAria/svelte_calculator.git', // Update to point to your repository  
        user: {
            name: 'EdrissAria', // update to use your name
            email: 'Edrissalokozay77@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)