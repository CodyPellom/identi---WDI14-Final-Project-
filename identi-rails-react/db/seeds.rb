require_relative './response_data.rb'
require_relative './correspondence_data.rb'
require_relative './user_data.rb'

Response.destroy_all
Correspondence.destroy_all
User.destroy_all

response_data = get_response_data
correspondence_data = get_correspondence_data
user_data = get_user_data



correspondence_data.each_pair do |user_name, correspondences|
    info = user_data[user_name]
    current_user = User.create!({
        name:           info[:name],
        email:          info[:email]
    })


    users.each do |correspondence|
        Correspondence.create!({
            title:       correspondence[:title],
            input:       correspondence[:input],
            result:      correspondence[:result]
            user:        current_user
        })
    end
end
puts "Successfully Seeded"