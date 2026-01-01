document.addEventListener('DOMContentLoaded', function(){
    const judul = document.querySelectorAll('.judul');

    judul.forEach(header =>{
        header.addEventListener('click', function(){
            const content = this.nextElementSibling;

            content.classList.toggle('active');

            if(content.classList.contains('active')){
                content.style.maxheight = content.scrollHeight + "px";
            }else{
                content.style.maxheight = 0;
            }

            document.querySelectorAll('description').forEach(otherContent => {
                if(otherContent !== content && otherContent.classList.contains('active')){
                    otherContent.classList.remove('active');
                    otherContent.style.maxheight=0;
                }
            })
        })
    })
})