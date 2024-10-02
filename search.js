let review = document.querySelector(".search-icon").addEventListener("click",function(){
    let filter=document.querySelector(".input").value.toLowerCase();
    let posts=document.querySelectorAll(".blog");
    posts.forEach(function(post){
        let title=post.getAttribute("data-title").toLowerCase();
        if(title.includes(filter)){
            post.style.display = "block";
        }
        else{
            post.style.display = "none";
        }
    });
});
document.getElementById('reviewForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting
        
        // Get input values
        
        var review = document.getElementById('review').value;
        
        // Create review object
        var reviewObj = {
            
            review: review
        };
        
        // Save review to local storage
        var reviews = JSON.parse(localStorage.getItem('reviews')) || [];
        reviews.push(reviewObj);
        localStorage.setItem('reviews', JSON.stringify(reviews));
        
        // Display review on the page
        displayReviews();
        
        // Reset form fields
       
        document.getElementById('review').value = '';
    });
    
    // Function to display reviews from local storage
    function displayReviews() {
        var reviews = JSON.parse(localStorage.getItem('reviews')) || [];
        var reviewSection = document.getElementById('reviewSection');
        reviewSection.innerHTML = ''; // Clear existing reviews
        
        reviews.forEach(function(reviewObj) {
            var reviewElement = document.createElement('div');
            reviewElement.classList.add('review');
            reviewElement.innerHTML = reviewObj.review;
            reviewSection.appendChild(reviewElement);
        });
    }
    document.getElementById('clearReviews').addEventListener('click', function() {
        localStorage.removeItem('reviews'); // Remove reviews from local storage
        displayReviews(); // Update display to reflect empty reviews
    });
    
    // Initial load: display existing reviews on page load
    displayReviews();