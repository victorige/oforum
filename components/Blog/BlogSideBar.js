import React, { Component } from 'react';
import Link from 'next/link';

class BlogSideBar extends Component {
    render() {
        return (
            <React.Fragment>
                <aside className="widget-area" id="secondary">
                    {/* Search */}
                    <div className="widget widget_search">
                        <form className="search-form">
                            <label>
                                <span className="screen-reader-text">Search for:</span>
                                <input type="search" className="search-field" placeholder="Search..." />
                            </label>
                            <button type="submit">
                                <i className="fas fa-search"></i>
                            </button>
                        </form>
                    </div>

                    {/* Popular Posts */}
                    <div className="widget widget_aronix_posts_thumb">
                        <h3 className="widget-title">Popular Posts</h3>

                        <article className="item">
                            <Link href="#">
                                <a className="thumb">
                                    <span className="fullimage cover bg1" role="img"></span>
                                </a>
                            </Link>

                            <div className="info">
                                <time>June 10, 2019</time>
                                <h4 className="title usmall">
                                    <Link href="#">
                                        <a>Making Peace With The Feast Or Famine Of Freelancing</a>
                                    </Link>
                                </h4>
                            </div>

                            <div className="clear"></div>
                        </article>

                        <article className="item">
                            <Link href="#">
                                <a className="thumb">
                                    <span className="fullimage cover bg2" role="img"></span>
                                </a>
                            </Link>

                            <div className="info">
                                <time>June 21, 2019</time>
                                <h4 className="title usmall">
                                    <Link href="#">
                                        <a>I Used The Web For A Day On A 50 MB Budget</a>
                                    </Link>
                                </h4>
                            </div>

                            <div className="clear"></div>
                        </article>

                        <article className="item">
                            <Link href="#">
                                <a className="thumb">
                                    <span className="fullimage cover bg3" role="img"></span>
                                </a>
                            </Link>

                            <div className="info">
                                <time>June 30, 2019</time>
                                <h4 className="title usmall">
                                    <Link href="#">
                                        <a>How To Create A Responsive Popup Gallery?</a>
                                    </Link>
                                </h4>
                            </div>

                            <div className="clear"></div>
                        </article>
                    </div>

                    {/* Categories */}
                    <div className="widget widget_categories">
                        <h3 className="widget-title">Categories</h3>

                        <ul>
                            <li>
                                <Link href="#">
                                    <a>Business</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>Privacy</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>Technology</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>Tips</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>Uncategorized</a>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Recent Comments */}
                    <div className="widget widget_recent_comments">
                        <h3 className="widget-title">Recent Comments</h3>

                        <ul>
                            <li>
                                <span className="comment-author-link">
                                    <Link href="#">
                                        <a>A WordPress Commenter</a>
                                    </Link>
                                </span>
                                <span className="plr-5">on</span>
                                <Link href="#">
                                    <a>Hello world!</a>
                                </Link>
                            </li>
                            <li>
                                <span className="comment-author-link">
                                    <Link href="#">
                                        <a>Aronix</a>
                                    </Link>
                                </span>
                                <span className="plr-5">on</span>
                                <Link href="#">
                                    <a>Hello world!</a>
                                </Link>
                            </li>
                            <li>
                                <span className="comment-author-link">
                                    <Link href="#">
                                        <a>Wordpress</a>
                                    </Link>
                                </span>
                                <span className="plr-5">on</span>
                                <Link href="#">
                                    <a>Hello world!</a>
                                </Link>
                            </li>
                            <li>
                                <span className="comment-author-link">
                                    <Link href="#">
                                        <a>A WordPress Commenter</a>
                                    </Link>
                                </span>
                                <span className="plr-5">on</span>
                                <Link href="#">
                                    <a>Hello world!</a>
                                </Link>
                            </li>
                            <li>
                                <span className="comment-author-link">
                                    <Link href="#">
                                        <a>Aronix</a>
                                    </Link>
                                </span>
                                <span className="plr-5">on</span>
                                <Link href="#">
                                    <a>Hello world!</a>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Recent Posts */}
                    <div className="widget widget_recent_entries">
                        <h3 className="widget-title">Recent Posts</h3>

                        <ul>
                            <li>
                                <Link href="#">
                                    <a>How to Become a Successful Entry Level UX Designer</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>How to start your business as an entrepreneur</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>How to be a successful entrepreneur</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>10 Building Mobile Apps With Ionic And React</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>Protect your workplace from cyber attacks</a>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Archives */}
                    <div className="widget widget_archive">
                        <h3 className="widget-title">Archives</h3>

                        <ul>
                            <li>
                                <Link href="#">
                                    <a>May 2019</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>April 2019</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>June 2019</a>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Meta */}
                    <div className="widget widget_meta">
                        <h3 className="widget-title">Meta</h3>

                        <ul>
                            <li>
                                <Link href="#">
                                    <a>Log in</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>Entries <abbr title="Really Simple Syndication">RSS</abbr></a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>Comments <abbr title="Really Simple Syndication">RSS</abbr></a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>WordPress.org</a>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Tags */}
                    <div className="widget widget_tag_cloud">
                        <h3 className="widget-title">Tags</h3>

                        <div className="tagcloud">
                            <Link href="#">
                                <a>IT <span className="tag-link-count"> (3)</span></a>
                            </Link>
                            <Link href="#">
                                <a>Aronix <span className="tag-link-count"> (3)</span></a>
                            </Link>
                            <Link href="#">
                                <a>Games <span className="tag-link-count"> (2)</span></a>
                            </Link>
                            <Link href="#">
                                <a>Fashion <span className="tag-link-count"> (2)</span></a>
                            </Link>
                            <Link href="#">
                                <a>Travel <span className="tag-link-count"> (1)</span></a>
                            </Link>
                            <Link href="#">
                                <a>Smart <span className="tag-link-count"> (1)</span></a>
                            </Link>
                            <Link href="#">
                                <a>Marketing <span className="tag-link-count"> (1)</span></a>
                            </Link>
                            <Link href="#">
                                <a>Tips <span className="tag-link-count"> (2)</span></a>
                            </Link>
                        </div>
                    </div>
                </aside>
            </React.Fragment>
        );
    }
}

export default BlogSideBar;