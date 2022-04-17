![banner](res/HousePortal_banner_readme.png)
# HousePortal

HousePortal is a clean and minimal interface to monitor and control your smart devices, such as light bulbs, light switches, TVs, bluetooth speakers, and many others.

## Recent posts

{% for categ in site.categories %}
  <h3>{{ categ[0] }}</h3>
  <ul>
    {% for post in categ[1] %}
      <li><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
{% endfor %}