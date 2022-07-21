export function card()
{
    var URLsearch = new URL(window.location.href);
    const searchParams = new URLSearchParams(URLsearch.search);
    var id = searchParams.get("id");
    printCard(id);
}
function printCard(id)
{
    
}