import React, { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import "./Blogs.css";
import img1 from "../../Images/blog2.png";
import img2 from "../../Images/blog.png";
import img3 from "../../Images/blog3.png";
import img4 from "../../Images/blog4.png";
import img5 from "../../Images/blog5.png";
import img6 from "../../Images/blog6.png";
import img7 from "../../Images/blog7.png";
import img8 from "../../Images/blog8.png";
import img9 from "../../Images/blog9.png";
import img10 from "../../Images/blog10.png";
import { Link } from "react-router-dom";

const blogData = [
  {
    id: 1,
    title: "Custom Websites vs. WordPress:",
    subtitle: "Make the right choice.",
    bannerImage: img1,
    content: [
      {
        type: "text",
        value: `When it comes to building a website, businesses often face a critical choice: go with WordPress, a popular content management system (CMS), or invest in a fully custom-developed website. While WordPress is widely loved for its ease of use and accessibility, custom-built websites offer a level of sophistication, flexibility, and long-term value that WordPress simply can’t match. Let’s explore why a custom website might be the smarter choice for your business.`,
      },
      {
        type: "header",
        value: "1. Customization: A Website That Fits Like a Glove",
      },
      {
        type: "text",
        value: `One of the biggest advantages of a custom-developed website is the ability to tailor every element to your exact needs. With WordPress, even the most flexible themes have limitations, and you'll often find yourself bending your vision to fit a template. Custom websites, on the other hand, are designed from the ground up to align perfectly with your brand, goals, and user experience. Want a unique animation? A specific feature? No problem.`,
      },

      {
        type: "header",
        value: "2. Flexibility and Scalability",
      },
      {
        type: "text",
        value: `Speed matters—both to your users and to search engines. Custom websites are built with optimized code, meaning they contain only what’s necessary to deliver your content and functionality. WordPress sites, especially those loaded with plugins and complex themes, often struggle with bloated code that can slow things down. When performance is a priority, custom development takes the lead.`,
      },
      {
        type: "header",
        value: "3. Security You Can Rely On",
      },
      {
        type: "text",
        value: `WordPress powers over 40% of websites worldwide—a popularity that also makes it a prime target for hackers. A fully custom website is inherently more secure because it doesn’t rely on third-party plugins or widely used platforms that attackers can exploit. With the right development practices, a custom site is less prone to vulnerabilities and more resilient against cyber threats.`,
      },
      {
        type: "header",
        value: "4. Scalability: Growing Without Limits",
      },
      {
        type: "text",
        value: `Your website should grow with your business, not hold it back. Custom websites are built to scale, whether you’re adding new features, handling increasing traffic, or integrating with additional tools. WordPress, while flexible, has architectural constraints that can make scaling complex or expensive over time. A custom solution ensures you won’t outgrow your website.`,
      },
      {
        type: "image",
        value: img2, // Add new image after point 4
      },
      {
        type: "header",
        value: "5. Seamless User Experience (UX)",
      },
      {
        type: "text",
        value: `In today’s crowded digital landscape, standing out is essential. A custom-developed website allows you to create a seamless, intuitive user journey tailored specifically to your audience. From unique interactive elements to advanced personalization, a custom website makes it easier to engage visitors and turn them into loyal customers.`,
      },
      {
        type: "header",
        value: "6. Independence and Ownership",
      },
      {
        type: "text",
        value: `When you build a WordPress site, you’re tied to the WordPress ecosystem—updates, compatibility issues, and reliance on plugins come with the territory. A custom-developed website, however, puts you in full control. You own every line of code, and you’re not dependent on a third-party platform to keep your site running.`,
      },
      {
        type: "header",
        value: "7. Tailored Integrations",
      },
      {
        type: "text",
        value: `If your business relies on specific tools or systems, a custom website makes integrating them seamless. Need a CRM connection, an AI-powered chatbot, or a custom API? A custom website can handle it all without the limitations or potential conflicts of WordPress plugins.`,
      },
      {
        type: "header",
        value: "8. Long-Term Value Over Upfront Costs",
      },
      {
        type: "text",
        value: `Sure, a WordPress site is cheaper upfront. But consider the long-term costs: plugin subscriptions, troubleshooting, and performance optimization can add up quickly. A custom website, though pricier to build, often proves more cost-effective over time due to reduced maintenance needs and the lack of recurring third-party fees.`,
      },
      {
        type: "header",
        value: "When WordPress Works Best",
      },
      {
        type: "text",
        value: `WordPress isn’t without its strengths. If you’re working with a tight budget, need a website up quickly, or want to manage content without technical expertise, WordPress is a reliable choice. However, for businesses with unique needs, a growth mindset, and a focus on long-term ROI, custom development is the way to go.`,
      },

      {
        type: "text",
        value: `A custom website is more than just a digital storefront—it’s a long-term investment in your brand’s success. While WordPress is a convenient starting point, custom development offers the performance, scalability, security, and uniqueness your business needs to thrive. If you’re ready to elevate your online presence and stand out from the crowd, a custom-built website is the way forward.`,
      },
      {
        type:"text",
        value:`Are you ready to build a website that’s as unique as your vision? Let’s make it happen.`
      }
    ],
    bottomSection: {
      heading:
        "WordPress or Custom Built, OAR Studios can help you with all your Business needs",
      description: "Let’s make it happen.",
    },
  },


  {
    id: 2,
    title: "Is a Website Necessary for a Growing Business?",
    subtitle: "",
    bannerImage: img3,
    content: [
      {
        type: "text",
        value: `In today’s fast-paced digital world, the short answer is yes—a website is not just necessary; it’s essential for a growing business. While some businesses rely solely on social media or other platforms to establish their online presence, having your own website provides unparalleled benefits that can significantly impact your growth and credibility. Here’s why every growing business should have a website:`,
      },
      {
        type: "header",
        value: "1. Establishes Credibility",
      },
      {
        type: "text",
        value: `A website acts as your digital storefront. In an age where customers research online before making decisions, not having a website can make your business appear less professional or credible. A well-designed website instantly boosts trust and reassures potential customers that your business is legitimate.
`,
      },

      {
        type: "header",
        value: "2. 24/7 Availability",
      },
      {
        type: "text",
        value: `Unlike a physical store with set hours, your website is accessible 24/7. This means customers can browse your offerings, learn about your services, and even make purchases or inquiries at any time. A website works for you even when you’re not actively managing it.
`,
      },
      {
        type: "header",
        value: "3. Expands Your Reach",
      },
      {
        type: "text",
        value: `A website allows you to reach customers far beyond your local area. Whether you’re targeting a national or global audience, your online presence is key to unlocking new markets. With SEO (Search Engine Optimization), your website can attract users searching for the exact products or services you offer.
`,
      },
      {
        type: "header",
        value: "4. A Hub for Digital Marketing",
      },
      {
        type: "text",
        value: `Your website serves as the central hub for all your digital marketing efforts. Social media campaigns, email newsletters, and ads often lead back to your website, where customers can take meaningful actions—whether it’s making a purchase, signing up for a service, or contacting your team.
`,
      },

      {
        type: "header",
        value: "5. Control Over Your Brand and Content",
      },
      {
        type: "text",
        value: `Social media platforms are great, but they come with limitations—you don’t own them, and algorithms can dictate how often your audience sees your content. A website gives you complete control over your branding, design, and messaging, allowing you to showcase your business exactly how you want.`,
      },
      {
        type: "image",
        value: img4, // Add new image after point 4
      },
      {
        type: "header",
        value: "6. Supports E-Commerce Opportunities",
      },
      {
        type: "text",
        value: `If you sell products, a website with ecommerce functionality can transform your business. You can set up an online store to sell directly to customers, expand your sales channels, and streamline payment and delivery processes. This is especially critical for businesses looking to scale.
`,
      },
      {
        type: "header",
        value: "7. Builds Customer Relationships",
      },
      {
        type: "text",
        value: `A website can house a blog, testimonials, FAQs, and detailed information about your business, creating a deeper connection with your audience. Features like live chat, email sign-ups, and personalized user experiences further enhance customer relationships and loyalty.
`,
      },
      {
        type: "header",
        value: "8. Cost-Effective Marketing Tool",
      },
      {
        type: "text",
        value: `While building and maintaining a website involves some investment, it’s a highly cost-effective marketing tool in the long run. With the right strategies, your website can attract organic traffic through SEO and content marketing, reducing the need for constant ad spending.
`,
      },

      {
        type: "header",
        value: "9. Tracks and Measures Growth",
      },
      {
        type: "text",
        value: `A website lets you collect valuable data about your visitors, such as their behavior, preferences, and demographics. Tools like Google Analytics help you measure the success of your marketing campaigns and refine your strategies to achieve better results.`,
      },

      {
        type: "header",
        value: "10. Future-Proofs Your Business",
      },
      {
        type: "text",
        value: `As consumer behavior continues to shift online, businesses without a website risk falling behind. A website ensures you’re prepared to adapt to future trends, whether it’s incorporating AI tools, offering online services, or leveraging new technologies.`,
      },

      {
        type: "header",
        value: "Conclusion",
      },
      {
        type: "text",
        value: `For a growing business, a website isn’t just an option—it’s a necessity. It establishes credibility, expands your reach, and provides a platform for customer engagement and sales. While social media and other platforms are valuable, they can’t replace the power and control a website gives you over your brand’s digital presence.`,
      },
      {
        type: "text",
        value: `If you’re serious about growth, it’s time to invest in a professional, user-friendly website that showcases your business and supports your ambitions.`,
      },
    ],
    bottomSection: {
      heading:
       
        "Looking for Professional IT Services? <br/> OAR Studios can help you with all your Business needs"
    },
  },



  {
    id: 3,
    title: "Why Digital Marketing is a Game-Changer for Small-Scale Businesses:",
    subtitle: "",
    bannerImage: img5,
    content: [
      {
        type: "text",
        value: `In today’s digital age, small-scale businesses face both challenges and opportunities. While competing with larger companies might seem daunting, digital marketing levels the playing field. It offers small businesses powerful tools to reach their audience, build brand awareness, and drive growth—all without the massive budgets of traditional marketing. Here’s why digital marketing is essential for small-scale businesses.
`,
      },
      {
        type: "header",
        value: "1. Cost-Effective Marketing",
      },
      {
        type: "text",
        value: `Small businesses often operate with tight budgets, making traditional advertising channels like TV or print inaccessible. Digital marketing provides affordable alternatives, such as social media ads, email campaigns, and search engine marketing. These channels allow you to target your ideal audience with precision, ensuring every dollar spent delivers maximum value.

`,
      },

      {
        type: "header",
        value: "2. Enhanced Reach and Visibility",
      },
      {
        type: "text",
        value: `With billions of people online, digital marketing gives small businesses access to a global audience. Even local businesses benefit from tools like Google My Business, which helps them appear in local searches and maps. Whether your goal is local visibility or global reach, digital marketing puts you in front of the right people at the right time.

`,
      },
      {
        type: "header",
        value: "3. Precise Targeting",
      },
      {
        type: "text",
        value: `Digital marketing platforms allow you to define your audience based on demographics, location, interests, and behaviors. Tools like Facebook Ads Manager and Google Ads let you target potential customers who are most likely to engage with your brand. This precision ensures your marketing efforts aren’t wasted on people who are unlikely to convert.

`,
      },
      {
        type: "header",
        value: "4. Real-Time Interaction with Customers",
      },
      {
        type: "text",
        value: `Social media, email, and live chat tools enable businesses to engage directly with customers in real-time. Whether it’s responding to queries, addressing concerns, or thanking customers for their support, digital marketing fosters stronger relationships, builds trust, and encourages loyalty.

`,
      },

      {
        type: "header",
        value: "5. Data-Driven Decision Making",
      },
      {
        type: "text",
        value: `Digital marketing provides measurable results. Platforms like Google Analytics and social media insights give small businesses access to valuable data, including website traffic, campaign performance, and customer behavior. With these insights, you can refine your strategies, focus on what works, and avoid wasting resources.
`,
      },
      {
        type: "image",
        value: img6, // Add new image after point 4
      },
      {
        type: "header",
        value: "6. Builds Brand Awareness",
      },
      {
        type: "text",
        value: `Even if you’re a small business, digital marketing can amplify your brand’s presence. With consistent social media posts, engaging content, and targeted ads, you can create a recognizable brand that stands out. Over time, this visibility helps build credibility and trust within your niche.
`,
      },
      {
        type: "header",
        value: "7. Enables Creativity and Flexibility",
      },
      {
        type: "text",
        value: `Small businesses often have the advantage of agility—they can quickly adapt and experiment with new marketing trends. From creating viral TikTok videos to leveraging Instagram Stories, digital marketing offers endless opportunities for creativity. This flexibility allows small businesses to test, refine, and innovate without major risks.

`,
      },
      {
        type: "header",
        value: "8. Increases Sales with E-commerce",
      },
      {
        type: "text",
        value: `For small businesses selling products, digital marketing and e-commerce go hand in hand. Platforms like Instagram and Facebook even allow you to sell directly to customers through integrated shopping features. Combined with targeted ads and email campaigns, these tools help convert online traffic into paying customers.

`,
      },

      {
        type: "header",
        value: "9. Competes with Larger Companies",
      },
      {
        type: "text",
        value: `Unlike traditional marketing, where big budgets dominate, digital marketing creates a more level playing field. A small business with a smart, well-targeted campaign can achieve significant results, often outperforming larger competitors with generic messaging.
`,
      },

      {
        type: "header",
        value: "10. Scalability and Growth",
      },
      {
        type: "text",
        value: `Digital marketing grows with your business. Starting small, you can experiment with low-cost campaigns and gradually increase your investment as your business expands. Tools like remarketing ensure you stay connected with existing customers, encouraging repeat business and long-term growth.`,
      },

      {
        type: "header",
        value: "Conclusion",
      },
      {
        type: "text",
        value: `Digital marketing is no longer optional for small-scale businesses—it’s essential. From increasing visibility to driving sales, it offers the tools to compete effectively and grow sustainably. The digital world is full of opportunities for those who are willing to embrace it.`,
      },
      {
        type: "text",
        value: `Are you ready to take your small business to the next level? Start exploring the power of digital marketing today.`,
      },
    ],
    bottomSection: {
      heading:
        "Looking for Professional IT Services? <br/> OAR Studios can help you with all your Business needs",
    },
  },




  {
    id: 4,
    title: "Why having a Website will boost your Digital Marketing growth:",
    subtitle: "",
    bannerImage: img7,
    content: [
      {
        type: "text",
        value: `A website is the cornerstone of any effective digital marketing strategy. It provides a central platform for all your online marketing efforts, allowing you to attract, engage, and convert visitors into loyal customers. Here’s how a website supports and amplifies your digital marketing initiatives.
  `,
      },
      {
        type: "header",
        value: "1. Acts as Your Digital Headquarters",
      },
      {
        type: "text",
        value: `Your website is the hub for all your online activities. Whether you’re running social media campaigns, email marketing, or paid advertisements, your website serves as the final destination where potential customers can take meaningful actions like purchasing a product, signing up for a service, or contacting your team.
  
  `,
      },
  
      {
        type: "header",
        value: "2. Enhances Visibility Through SEO",
      },
      {
        type: "text",
        value: `Search engine optimization (SEO) is a key component of digital marketing, and your website is the foundation for it. By optimizing your website’s content for keywords, creating high-quality blog posts, and improving site structure, you can rank higher on search engine results pages (SERPs). This drives organic traffic and connects you with people actively searching for what you offer.
  
  `,
      },
      {
        type: "header",
        value: "3. Builds Credibility and Trust",
      },
      {
        type: "text",
        value: `A professional, user-friendly website enhances your credibility. Customers are more likely to trust a business with a well-maintained website compared to one that relies solely on social media or third-party platforms. A website showcases your brand’s professionalism, expertise, and commitment to quality.
  
  `,
      },
      {
        type: "header",
        value: "4. Enables Targeted Marketing Campaigns",
      },
      {
        type: "text",
        value: `With a website, you can run highly targeted digital marketing campaigns:
  Landing Pages: Create dedicated pages for specific campaigns to boost conversion rates.
  Remarketing: Retarget visitors who left your website without converting by showing them personalized ads.
  A/B Testing: Test different versions of your pages to identify what works best.
  
  `,
      },
  
      {
        type: "header",
        value: "5. Collects and Analyzes Data",
      },
      {
        type: "text",
        value: `Digital marketing relies on data, and a website is a powerful tool for gathering it. Tools like Google Analytics allow you to track visitor behavior, monitor traffic sources, and measure the effectiveness of your campaigns. These insights help refine your strategies for better results.
  
  `,
      },
      {
        type: "image",
        value: img8, // Add new image after point 4
      },
      {
        type: "header",
        value: "6. Facilitates E-Commerce and Online Sales",
      },
      {
        type: "text",
        value: `If you sell products or services, your website is an essential platform for e-commerce. Features like online stores, payment gateways, and shopping carts allow customers to make purchases directly. Integrating e-commerce with digital marketing campaigns amplifies your sales potential.
  `,
      },
      {
        type: "header",
        value: "7. Integrates with Marketing Tools",
      },
      {
        type: "text",
        value: `Your website works seamlessly with other digital marketing tools:
  Email Marketing: Capture leads with sign-up forms and direct subscribers to valuable content.
  Social Media: Drive traffic to your site by sharing blog posts, promotions, or product pages.
  Paid Ads: Use landing pages to maximize the effectiveness of PPC campaigns.
  
  `,
      },
      {
        type: "header",
        value: "8. Strengthens Brand Identity",
      },
      {
        type: "text",
        value: `A website gives you full control over how your brand is presented online. From custom designs to unique content, you can ensure your website reflects your brand’s values, mission, and personality. This consistent branding across all digital platforms reinforces trust and recognition.
  
  `,
      },
  
      {
        type: "header",
        value: "9. Increases Engagement with Content Marketing",
      },
      {
        type: "text",
        value: `Content marketing is a critical part of digital marketing, and your website is the perfect place to publish and showcase content. Blogs, case studies, videos, and infographics hosted on your site attract visitors and keep them engaged. This content also helps establish your authority in your industry.
  `,
      },
  
      {
        type: "header",
        value: "10. Provides Long-Term Value",
      },
      {
        type: "text",
        value: `Unlike paid ads that stop working when your budget runs out, a website continues to generate value over time. Evergreen content, SEO efforts, and a strong user experience ensure that your website remains a powerful marketing tool long into the future.
  `,
      },
  
      {
        type: "header",
        value: "Conclusion",
      },
      {
        type: "text",
        value: `Having a website is essential for digital marketing success. It serves as the foundation for your campaigns, enhances visibility, builds trust, and supports every aspect of your online strategy. With a well-designed website, you can maximize the effectiveness of your digital marketing efforts, attract more customers, and drive sustainable growth.`,
      },
      {
        type: "text",
        value: `If you’re looking to take your digital marketing to the next level, start by investing in a professional, user-friendly website. It’s the smartest move for your business’s future.
`,
      },
    ],
    bottomSection: {
      heading:
        "Looking for Professional IT Services? <br/> OAR Studios can help you with all your Business needs",
    },
  },



  
  {
    id: 5,
    title: "Drive More Traffic to Your Resort with These SEO Tips",
    subtitle: "",
    bannerImage: img9,
    content: [
      {
        type: "text",
        value: `Attracting more visitors to your resort starts with a strong online presence. Here are actionable SEO strategies to help your resort rank higher, reach a broader audience, and increase bookings:
  `,
      },
      {
        type: "header",
        value: "1. Optimize Your Website for Local SEO",
      },
      {
        type: "text",
        value: `Local SEO ensures your resort appears in search results for location-based queries. Claim your Google Business Profile and update it with accurate details like your address, contact information, and photos. Use location-specific keywords, such as “luxury resorts in [city],” throughout your website. Additionally, list your resort in popular directories like TripAdvisor, Yelp, and Booking.com to enhance local visibility.
  
  `,
      },
  
      {
        type: "header",
        value: "2. Leverage Long-Tail Keywords",
      },
      {
        type: "text",
        value: `Long-tail keywords are highly specific and target niche audiences, offering lower competition and better conversion rates. Incorporate phrases like “family-friendly resorts in [destination]” or “all-inclusive beachfront stays in [region].” Tools like Google Keyword Planner can help you identify the best long-tail keywords for your resort’s offerings.

  
  `,
      },
      {
        type: "header",
        value: "3. Create High-Quality Content",
      },
      {
        type: "text",
        value: `Engaging content is key to attracting and retaining visitors. Publish blogs about local attractions, travel tips, and unique experiences your resort offers. Use high-quality images and videos to showcase amenities and activities. FAQs addressing common traveler concerns like “What are the best nearby attractions?” can also improve user engagement and search rankings.
  
  `,
      },
      {
        type: "header",
        value: "4. Enhance Website Speed and Mobile-Friendliness",
      },
      {
        type: "text",
        value: `Travelers often search for resorts on mobile devices, making a fast and mobile-optimized website essential. Compress large images to improve loading times and use responsive design to ensure your site works seamlessly on all screen sizes. Implement Accelerated Mobile Pages (AMP) to provide a smoother mobile browsing experience.
  
  `,
      },
  
      {
        type: "header",
        value: "5. Use Schema Markup for Resorts",
      },
      {
        type: "text",
        value: `Schema markup helps search engines display detailed information about your resort in search results. Add hotel schema to highlight pricing, amenities, and reviews. Use event schema to promote special activities, events, or seasonal offers at your resort, making your listing more appealing in search results.
  
  `,
      },
      {
        type: "image",
        value: img10, // Add new image after point 4
      },
      {
        type: "header",
        value: "6. Optimize for Voice Search",
      },
      {
        type: "text",
        value: `With the rise of voice assistants like Siri and Alexa, optimizing for voice search can expand your reach. Include conversational, question-based phrases in your content, such as “What are the best luxury resorts in [location]?” Ensure your website provides direct answers to these queries in natural, conversational language.
  `,
      },
      {
        type: "header",
        value: "7. Encourage and Highlight Positive Reviews",
      },
      {
        type: "text",
        value: `Online reviews significantly impact travelers’ decisions. Encourage satisfied guests to leave reviews on platforms like Google, TripAdvisor, and Yelp. Showcase testimonials on your website to build trust and credibility. Always respond to reviews—both positive and negative—to demonstrate your commitment to guest satisfaction.
  
  `,
      },
      {
        type: "header",
        value: "8. Build High-Quality Backlinks",
      },
      {
        type: "text",
        value: `Backlinks from authoritative sites improve your website’s search rankings. Partner with travel bloggers, influencers, and tourism websites to feature your resort. Submit guest articles or collaborate on travel guides that link back to your site. High-quality backlinks enhance your credibility and visibility.
  
  `,
      },
  
      {
        type: "header",
        value: "9. Focus on Social Media Integration",
      },
      {
        type: "text",
        value: `Social media plays a crucial role in driving traffic. Share blog posts, videos, and special offers on platforms like Instagram and Facebook. Add social sharing buttons to your website, making it easy for visitors to share your content. Consistent engagement on social platforms also boosts your online presence.
  `,
      },
  
      {
        type: "header",
        value: "10. Monitor and Refine Your SEO Strategy",
      },
      {
        type: "text",
        value: `Use tools like Google Analytics to track website traffic, user behavior, and keyword performance. Regularly review your data to identify what works and adjust your SEO strategy accordingly. SEO is an ongoing process, and constant refinement ensures sustained success.
  `,
      },
  
      {
        type: "header",
        value: "Conclusion",
      },
      {
        type: "text",
        value: `By implementing these SEO strategies, your resort can attract more traffic, engage potential guests, and secure more bookings.`,
      },
      {
        type: "text",
        value: `A well-optimized online presence is the key to standing out in today’s competitive hospitality market.`,
      },
    ],
    bottomSection: {
      heading:
      "Looking for Professional IT Services? <br/> OAR Studios can help you with all your Business needs",
    },
  },






];

function Blogs() {
  const { id } = useParams(); // Get the blog ID from the URL
  const location = useLocation();

  useEffect(() => {
    const scrollContainer = document.querySelector('.scroll-container');
    if (scrollContainer) {
      scrollContainer.scrollTo(0, 0);
    }
  }, [id, location]);
  
  const blog = blogData.find((b) => b.id === parseInt(id)); // Find the specific blog by ID

  if (!blog) {
    return <div>Blog not found!</div>; // Handle case where blog does not exist
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="blogs-container">
      <div className="blog">
        <div
          className="blog-header"
          onClick={scrollToTop}
          style={{ cursor: "pointer" }}
        >
          <h1>
            {blog.title}
            <br />
            <span>{blog.subtitle}</span>
          </h1>
        </div>
        <div className="blog-image">
          <img
            src={blog.bannerImage}
            alt={`${blog.title} banner`}
            onClick={scrollToTop}
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className="blog-content">
          {blog.content.map((item, index) => {
            switch (item.type) {
              case "text":
                return <p key={index} className="blog-text">{item.value}</p>;
              case "header":
                return <h2 key={index} className="blog-header">{item.value}</h2>;
              case "image":
                return (
                  <div key={index} className="content-image">
                    <img src={item.value} alt="Blog content" />
                  </div>
                );
              default:
                return null;
            }
          })}
        </div>
        <div className="bottom-section">
        <h2 dangerouslySetInnerHTML={{ __html: blog.bottomSection.heading }}></h2>
          <p>
            Get a free consultation today, get on a call with our industry
            experts to skyrocket your business growth.
          </p>
          <Link to="/help-center">
            <button className="submit-btn-footer">Contact Us</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
