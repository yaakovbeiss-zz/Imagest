if @posts
  @posts.each do |post|
    json.set! post.id do
      json.id post.id
      json.title post.title
      json.image post.main_image.image.url if post.main_image
      json.created_at post.created_at
    end
  end
end
