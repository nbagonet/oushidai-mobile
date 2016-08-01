import Mock from 'mockjs'

// 初始化Mock
export const initMock = function () {
  const _host = window.location.hostname
  if (_host.indexOf('localhost') !== -1 || _host.indexOf('192.168.') !== -1) {
    // 配置Mock
    Mock.setup({
      timeout: '200-1000'
    })

    // ========
    // 模拟数据
    // ========
    /**
     * 注册接口
     */
    Mock.mock(/\/user\/ajax\/register_mail(.*)/, 'post', {
      'error': '1000',
      'errmsg': '成功',
      'data': {
        'token': '12345'
      }
    })

    /**
     * 点赞接口
     */
    Mock.mock(/\/praise\/ajax(.*)/, 'post', {
      'error': '1000',
      'errmsg': '成功',
      'data': {
        'txt': '谢谢你的点赞',
        'award': '+1',
        'awardUnit': '积分',
        'num': '123456'
      }
    })

    /**
     * 网站首页焦点图数据接口
     */
    Mock.mock(/\/home\/ajax\/get_recommend_list(.*)/, 'get', {
      'error': '1000',
      'errmsg': '成功',
      'data': {
        'focus|5': [{
          'id': function () {
            return Mock.Random.id()
          },
          'type|1': ['news', 'event'],
          'pic': function () {
            return 'http://temp.im/640x320'
          },
          'title': function () {
            return Mock.Random.ctitle(12, 30)
          },
          'info': function () {
            return Mock.Random.cword(25, 50)
          },
          'link': '#',
          'event_type|1': ['org', 'user'],
          'tags|1-2': [{
            'tag': function () {
              return Mock.Random.cword(1, 5)
            },
            'id': function () {
              return Mock.Random.id()
            },
            'url': '#'
          }],
          'author': {
            'name': function () {
              return Mock.Random.cname()
            },
            'uid': function () {
              return Mock.Random.id()
            },
            'avatar': function () {
              return 'http://temp.im/30x30'
            },
            'type|1': ['writer', 'mediaOrg', 'eventOrg'],
            'homepage': '#'
          },
          'event_info|0-1': [{
            'start_time': function () {
              return Mock.Random.datetime('yyyy-MM-dd HH:mm:ss')
            },
            'end_time': function () {
              return Mock.Random.datetime('yyyy-MM-dd HH:mm:ss')
            },
            'place': function () {
              return Mock.Random.ctitle(2, 5)
            },
            'cost': {
              'amount|1': ['0', '0', '12.34'],
              'unit': '€',
              'is_equally': 'false',
              'is_others': 'false',
              'exp': function () {
                return Mock.Random.ctitle(10, 50)
              }
            }
          }],
          'time': function () {
            return Mock.Random.datetime('yyyy-MM-dd HH:mm:ss')
          },
          'like': {
            'is_liked|1': ['true', 'false'],
            'num': function () {
              return Mock.Random.integer(0, 99999)
            }
          },
          'comment': {
            'num': function () {
              return Mock.Random.integer(0, 9999)
            }
          },
          'view': {
            'num': function () {
              return Mock.Random.integer(0, 9999)
            }
          },
          'watch': {
            'num': function () {
              return Mock.Random.integer(0, 9999)
            }
          },
          'join': {
            'num': function () {
              return Mock.Random.integer(0, 9999)
            }
          }
        }]
      }
    })

    /**
     * 资讯首页焦点图数据接口
     */
    Mock.mock(/\/information\/ajax\/get_recommend_list(.*)/, 'get', {
      'error': '1000',
      'errmsg': '成功',
      'data': {
        'focus|5': [{
          'id': function () {
            return Mock.Random.id()
          },
          'type': 'news',
          'pic': function () {
            return 'http://temp.im/640x320'
          },
          'title': function () {
            return Mock.Random.ctitle(12, 30)
          },
          'info': function () {
            return Mock.Random.cword(25, 50)
          },
          'link': '#',
          'tags|1-2': [{
            'tag': function () {
              return Mock.Random.cword(1, 5)
            },
            'id': function () {
              return Mock.Random.id()
            },
            'url': '#'
          }],
          'author': {
            'name': function () {
              return Mock.Random.cname()
            },
            'uid': function () {
              return Mock.Random.id()
            },
            'avatar': function () {
              return 'http://temp.im/30x30'
            },
            'type|1': ['writer', 'mediaOrg'],
            'homepage': '#'
          },
          'time': function () {
            return Mock.Random.datetime('yyyy-MM-dd HH:mm:ss')
          },
          'like': {
            'is_liked|1': ['true', 'false'],
            'num': function () {
              return Mock.Random.integer(0, 99999)
            }
          },
          'comment': {
            'num': function () {
              return Mock.Random.integer(0, 9999)
            }
          },
          'view': {
            'num': function () {
              return Mock.Random.integer(0, 9999)
            }
          }
        }]
      }
    })

    /**
     * 资讯列表接口
     */
    Mock.mock(/\/information\/ajax\/get_list(.*)/, 'get', {
      'error': '1000',
      'errmsg': '成功',
      'data': {
        'list|10': [{
          'id': function () {
            return Mock.Random.id()
          },
          'type': 'news',
          'userPage': {
            'id': function () {
              return Mock.Random.id()
            },
            'type|1': ['mediaOrg', 'writer']
          },
          'pic': function () {
            return 'http://temp.im/' + Mock.Random.integer(350, 600) + 'x' + Mock.Random.integer(300, 1200)
          },
          'pic_size': {
            'w': function () {
              return Mock.Random.integer(700, 1200)
            },
            'h': function () {
              return Mock.Random.integer(300, 1200)
            }
          },
          'is_video|1': ['true', 'false'],
          'tags|1-2': [{
            'tag': function () {
              return Mock.Random.cword(1, 5)
            },
            'id': function () {
              return Mock.Random.id()
            }
          }],
          'title': function () {
            return Mock.Random.ctitle(12, 40)
          },
          'info': function () {
            return Mock.Random.cword(25, 50)
          },
          'link': '#',
          'author': {
            'type|1': ['writer', 'mediaOrg'],
            'name': function () {
              return Mock.Random.cname()
            },
            'uid': function () {
              return Mock.Random.id()
            },
            'avatar': function () {
              return 'http://temp.im/30x30'
            },
            'homepage': '#'
          },
          'time': function () {
            return Mock.Random.datetime('yyyy-MM-dd HH:mm:ss')
          },
          'like': {
            'is_liked|1': ['true', 'false'],
            'num': function () {
              return Mock.Random.integer(0, 9999)
            }
          },
          'comment': {
            'num': function () {
              return Mock.Random.integer(9000, 15999)
            }
          },
          'view': {
            'num': function () {
              return Mock.Random.integer(0, 9999)
            }
          },
          'share': {
            'num': function () {
              return Mock.Random.integer(0, 9999)
            }
          }
        }]
      }
    })

    /**
     * 某个用户赞过的内容接口
     */
    Mock.mock(/\/praise\/ajax\/get_userpage_praise_list(.*)/, 'get', {
      'error': '1000',
      'errmsg': '成功',
      'data': {
        'list|10': [{
          'id': function () {
            return Mock.Random.id()
          },
          'type': 'news',
          'userPage': {
            'id': function () {
              return Mock.Random.id()
            },
            'type|1': ['mediaOrg', 'writer']
          },
          'pic': function () {
            return 'https://unsplash.it/' + Mock.Random.integer(700, 1200) + '/' + Mock.Random.integer(300, 1200) + '/?' + Mock.Random.id()
          },
          'pic_size': {
            'w': function () {
              return Mock.Random.integer(700, 1200)
            },
            'h': function () {
              return Mock.Random.integer(300, 1200)
            }
          },
          'is_video|1': ['true', 'false'],
          'tags|1-2': [{
            'tag': function () {
              return Mock.Random.cword(1, 5)
            },
            'id': function () {
              return Mock.Random.id()
            }
          }],
          'title': function () {
            return Mock.Random.ctitle(12, 40) + '赞过的'
          },
          'info': function () {
            return Mock.Random.cword(25, 50)
          },
          'link': '#',
          'author': {
            'type|1': ['writer', 'mediaOrg'],
            'name': function () {
              return Mock.Random.cname()
            },
            'uid': function () {
              return Mock.Random.id()
            },
            'avatar': function () {
              return 'https://unsplash.it/30/30/?' + Mock.Random.id()
            },
            'homepage': '#'
          },
          'time': function () {
            return Mock.Random.datetime('yyyy-MM-dd HH:mm:ss')
          },
          'like': {
            'is_liked|1': ['true', 'false'],
            'num': function () {
              return Mock.Random.integer(0, 9999)
            }
          },
          'comment': {
            'num': function () {
              return Mock.Random.integer(9000, 15999)
            }
          },
          'view': {
            'num': function () {
              return Mock.Random.integer(0, 9999)
            }
          },
          'share': {
            'num': function () {
              return Mock.Random.integer(0, 9999)
            }
          }
        }]
      }
    })

    /**
     * 某个用户评论过的内容接口
     */
    Mock.mock(/\/comment\/ajax\/get_userpage_comment_list(.*)/, 'get', {
      'error': '1000',
      'errmsg': '成功',
      'data': {
        'list|10': [{
          'contentId|1-99999': 1,
          'id': function () {
            return Mock.Random.id()
          },
          'type': 'news',
          'userPage': {
            'id': function () {
              return Mock.Random.id()
            },
            'type|1': ['mediaOrg', 'writer']
          },
          'pic': function () {
            return 'https://unsplash.it/' + Mock.Random.integer(700, 1200) + '/' + Mock.Random.integer(300, 1200) + '/?' + Mock.Random.id()
          },
          'pic_size': {
            'w': function () {
              return Mock.Random.integer(700, 1200)
            },
            'h': function () {
              return Mock.Random.integer(300, 1200)
            }
          },
          'is_video|1': ['true', 'false'],
          'tags|1-2': [{
            'tag': function () {
              return Mock.Random.cword(1, 5)
            },
            'id': function () {
              return Mock.Random.id()
            }
          }],
          'title': function () {
            return Mock.Random.ctitle(12, 40) + '评论过的'
          },
          'info': function () {
            return Mock.Random.cword(25, 50)
          },
          'link': '#',
          'author': {
            'type|1': ['writer', 'mediaOrg'],
            'name': function () {
              return Mock.Random.cname()
            },
            'uid': function () {
              return Mock.Random.id()
            },
            'avatar': function () {
              return 'https://unsplash.it/30/30/?' + Mock.Random.id()
            },
            'homepage': '#'
          },
          'time': function () {
            return Mock.Random.datetime('yyyy-MM-dd HH:mm:ss')
          },
          'like': {
            'is_liked|1': ['true', 'false'],
            'num': function () {
              return Mock.Random.integer(0, 9999)
            }
          },
          'comment': {
            'num': function () {
              return Mock.Random.integer(9000, 15999)
            }
          },
          'view': {
            'num': function () {
              return Mock.Random.integer(0, 9999)
            }
          },
          'share': {
            'num': function () {
              return Mock.Random.integer(0, 9999)
            }
          }
        }]
      }
    })

    /**
     * 相关资讯接口
     */
    Mock.mock(/\/information\/ajax\/get_related_list(.*)/, 'get', {
      'error': '1000',
      'errmsg': '成功',
      'data': {
        'list|10': [{
          'id': function () {
            return Mock.Random.id()
          },
          'type': 'news',
          'userPage': {
            'id': function () {
              return Mock.Random.id()
            },
            'type|1': ['mediaOrg', 'writer']
          },
          'pic': function () {
            return 'http://temp.im/' + Mock.Random.integer(700, 1200) + 'x' + Mock.Random.integer(300, 1200)
          },
          'pic_size': {
            'w': function () {
              return Mock.Random.integer(700, 1200)
            },
            'h': function () {
              return Mock.Random.integer(300, 1200)
            }
          },
          'is_video|1': ['true', 'false'],
          'tags|1-2': [{
            'tag': function () {
              return Mock.Random.cword(1, 5)
            },
            'id': function () {
              return Mock.Random.id()
            }
          }],
          'title': function () {
            return Mock.Random.ctitle(12, 40)
          },
          'info': function () {
            return Mock.Random.cword(25, 50)
          },
          'link': '#',
          'author': {
            'type|1': ['writer', 'mediaOrg'],
            'name': function () {
              return Mock.Random.cname()
            },
            'uid': function () {
              return Mock.Random.id()
            },
            'avatar': function () {
              return 'http://temp.im/30x30'
            },
            'homepage': '#'
          },
          'time': function () {
            return Mock.Random.datetime('yyyy-MM-dd HH:mm:ss')
          },
          'like': {
            'is_liked|1': ['true', 'false'],
            'num': function () {
              return Mock.Random.integer(0, 9999)
            }
          },
          'comment': {
            'num': function () {
              return Mock.Random.integer(9000, 15999)
            }
          },
          'view': {
            'num': function () {
              return Mock.Random.integer(0, 9999)
            }
          },
          'share': {
            'num': function () {
              return Mock.Random.integer(0, 9999)
            }
          }
        }]
      }
    })

    /**
     * 资讯正文接口
     */
    Mock.mock(/\/information\/ajax\/get_content(.*)/, 'get', {
      'error': '1000',
      'errmsg': '成功',
      'data': {
        'id': function () {
          return Mock.Random.id()
        },
        'type': 'news',
        'category': {
          'name': function () {
            return Mock.Random.cword(2, 5)
          },
          'id': function () {
            return Mock.Random.id()
          }
        },
        'prevNews': {
          'id': function () {
            return Mock.Random.id()
          }
        },
        'nextNews': {
          'id': function () {
            return Mock.Random.id()
          }
        },
        'tags|1-2': [{
          'tag': function () {
            return Mock.Random.cword(1, 5)
          },
          'id': function () {
            return Mock.Random.id()
          }
        }],
        'cover': function () {
          return 'http://temp.im/' + Mock.Random.integer(350, 600) + 'x' + Mock.Random.integer(150, 300)
        },
        'title': function () {
          // return '从未见过如奢华的H&amp;M，把爱马仕都比下去了'
          return Mock.Random.ctitle(12, 30)
        },
        'author': {
          'type|1': ['writer', 'mediaOrg'], // ['writer', 'mediaOrg', 'eventOrg', 'user'],
          'name': function () {
            return Mock.Random.cname()
          },
          'uid': function () {
            return Mock.Random.id()
          },
          'avatar': function () {
            return 'http://temp.im/60x60'
          },
          'homepage': '#'
        },
        'time': function () {
          return Mock.Random.datetime('yyyy-MM-dd HH:mm:ss')
        },
        'like': {
          'is_liked|1': ['true', 'false'],
          'num': function () {
            return Mock.Random.integer(0, 9999)
          }
        },
        'comment': {
          'num': function () {
            return Mock.Random.integer(9000, 15999)
          }
        },
        'view': {
          'num': function () {
            return Mock.Random.integer(0, 9999)
          }
        },
        'content': function () {
          let content = ''
          for (var i = 0; i < Mock.Random.natural(5, 10); i++) {
            content += '<p>' + Mock.Random.cparagraph(5, 20) + '</p>'
          }
          return content
        }
        // 'content': '<section style=\"height:100px;background:#000;\"><\/section><section style=\"height:100px;background:#000;\"><\/section><section style=\"height:100px;background:#000;\"><\/section><section style=\"height:100px;background:#000;\"><\/section><section style=\"height:100px;background:#000;\"><\/section><section style=\"height:100px;\"><\/section><section style=\"height:100px;\">这个section得留着<\/section><section style=\"height:100px;background:#000;\"><\/section><section style=\"height:100px;background:#000;\"><\/section><section style=\"height:100px;background:#000;\"><\/section><section style=\"height:100px;background:#000;\"><\/section><section style=\"height:100px;background:#000;\"><\/section><section style=\"height:100px;background:#000;\"><\/section><p style=\"text-align: justify;\"><span style=\"font-family: 微软雅黑, \'Microsoft YaHei\'; font-size: 16px;\">从加莱回来，身体就撑不住了，休整了两天终于重新开始写这部分手记，还有其中的一部分是在回巴黎的高铁上写的。</span></p><p style=\"text-align: justify;\"><span style=\"font-family: 微软雅黑, \'Microsoft YaHei\'; font-size: 16px;\">这次去加莱，跟两个月之前相比，变化太大了。可能唯一不变的就是这些难民一心要去英国的愿望吧。</span></p><p style=\"text-align: justify;\"><span style=\"font-family: 微软雅黑, \'Microsoft YaHei\';\"><img src=\"http://www.oushidai.com/static/upload/2016/03/06/20160306203605000000_1_654303_94.jpg\" alt=\"http://www.oushidai.com/static/upload/2016/03/06/20160306203605000000_1_654303_94.jpg\" width=\"597\" height=\"405\" style=\"width: 597px; height: 405px;\">&nbsp;</span><br></p><p><span style=\"font-family: 微软雅黑, \'Microsoft YaHei\';\"><br></span></p><p><span style=\"font-family: arial, helvetica, sans-serif; font-size: 18px;\"><strong><span style=\"font-family: arial, helvetica, sans-serif; text-decoration: underline; background-color: yellow;\">Grande Synthe</span></strong></span></p><p><span style=\"font-family: 黑体, SimHei; font-size: 18px;\"><strong><span style=\"font-family: 黑体, SimHei; text-decoration: underline; background-color: yellow;\">一条马路，两个世界／以及难民</span></strong><strong><span style=\"font-family: 黑体, SimHei; text-decoration: underline; background-color: yellow;\">“</span></strong><strong><span style=\"font-family: 黑体, SimHei; text-decoration: underline; background-color: yellow;\">投机者</span></strong><strong><span style=\"font-family: 黑体, SimHei; text-decoration: underline;\">”</span></strong></span></p><p style=\"text-align: justify;\"><span style=\"font-family: 微软雅黑, \'Microsoft YaHei\'; font-size: 16px;\">因为之前报道里说在敦刻尔克郊区的Grande Synthe建了一个新的难民营，我本来打算这次先去这一个难民营的。Grande Synthe难民营主要是来自伊拉克的库尔德人（Kurde），这里的难民有2500到3000的样子，其中200多个还是小孩。</span></p><p style=\"text-align: justify;\"><span style=\"font-family: 微软雅黑, \'Microsoft YaHei\'; font-size: 16px;\">周一天气不错，只是风特别大，我赶到敦刻尔克的时候已经是中午。这个海港城市其实特别漂亮，车站的背后就是交错的运河，不远处就是海滩。唯一让我苦恼的是，报道里只是说了难民营在Grande Synthe这个小城市里，但是我力所能及搜集到的所有关于这个难民营的信息都没有提到它的具体位置。后来多亏了朋友帮我问了他在敦刻尔克的当地同学，才找到这个“城中村”。为什么说是城中村呢，因为我在这里真真切切的看到了“边界（<span style=\"font-family: arial, helvetica, sans-serif; font-size: 16px;\">Frontière</span>）”这个词的含义。按照地图提示的路线走着，我的心里就很纳闷，这里怎么会有难民营呢？这是一条我在这里见过的最漂亮最整齐的路，还有个当地最大的花园，怎么可能有难民营在附近。</span></p><p style=\"text-align: justify;\"><img src=\"http://www.oushidai.com/static/upload/2016/03/06/20160306203802000000_1_669614_2.jpg\" alt=\"http://www.oushidai.com/static/upload/2016/03/06/20160306203802000000_1_669614_2.jpg\" width=\"640\" height=\"419\" style=\"width: 640px; height: 419px;\"></p><p style=\"text-align: justify;\"><span style=\"font-family: 微软雅黑, \'Microsoft YaHei\'; font-size: 16px;\">一直往前走看到一条马路，终于在马路的对面，才看到那一片难民营。就只有一条马路之隔，这一边是特别漂亮的住宅房子，而另一侧则是泥泞杂乱的难民营。我不知道该怎样形容当时的心情，只是在想，如果我住在马路的另一侧，心里会是一种什么样的感受，我不知道，也说不上来。人生，好像也不是那样公平的。</span></p><p style=\"text-align: justify;\"><span style=\"font-family: 微软雅黑, \'Microsoft YaHei\'; font-size: 16px;\"></span></p><p style=\"text-align: justify;\"><img src=\"http://www.oushidai.com/static/upload/2016/03/06/20160306204244000000_1_1175082_82.jpg\" style=\"width: 634px; height: 418px;\" width=\"634\" height=\"418\"></p><p><img src=\"http://www.oushidai.com/static/upload/2016/03/06/20160306204253000000_1_818512_34.jpg\" style=\"width: 631px; height: 410px;\" width=\"631\" height=\"410\"></p><p><img src=\"http://www.oushidai.com/static/upload/2016/03/06/20160306204256000000_1_1129972_48.jpg\" style=\"width: 629px; height: 428px;\" width=\"629\" height=\"428\"></p><p><span style=\"font-family: 微软雅黑, \'Microsoft YaHei\'; font-size: 16px;\"><br></span></p><p style=\"text-align: justify;\"><span style=\"font-family: 微软雅黑, \'Microsoft YaHei\'; font-size: 16px;\">马路的另一侧有严密的栅栏围着，在难民营的栅栏旁边有四五辆警车，警察看管的特别严格，难民出入都要出示证件给他们。我有点紧张了，明明之前去加莱难民营并没有警察啊，那里出入自由，我开始担心他们会不会让我进去。我说我是志愿者，希望进去帮助难民，他们就问我要证明，逼问我是什么志愿组织的，一定要出示证明。在他们的逼问下没办法我才实话说我是学生，希望进去看看难民的情况，没有别的坏想法。那两个警察特别不给情面，一口回绝，说绝对不可能，除非我有市政府开的允许进入的证明。真是的，一根筋，心里不得已抱怨两句。</span></p><p style=\"text-align: justify;\"><span style=\"font-family: 微软雅黑, \'Microsoft YaHei\'; font-size: 16px;\">后来我就在难民营周围转悠，这个难民营真的是个森严的地方，透过栅栏可以看到难民营里面都是泥地，可能前几天刚下过雨，加上乱扔的垃圾和剩饭，真的只能用脏乱差来形容了。栅栏旁边有些类似于Never Give Up之类的标语。</span></p><p style=\"text-align: justify;\"><img src=\"http://www.oushidai.com/static/upload/2016/03/06/20160306204523000000_1_1008262_11.jpg\" style=\"width: 626px; height: 409px;\" width=\"626\" height=\"409\"></p><p><img src=\"http://www.oushidai.com/static/upload/2016/03/06/20160306204526000000_1_805220_58.jpg\" style=\"width: 627px; height: 413px;\" width=\"627\" height=\"413\"></p><p style=\"text-align: justify;\"><span style=\"font-family: 微软雅黑, \'Microsoft YaHei\'; font-size: 16px;\">难民营外面也有一些难民来来回回的走动，应该有些是进城刚回来，也有些只是在外面瞎溜达，也有看到几个妇女和小孩子，他们看到我都还蛮热情的打招呼，只不过他们不讲法语，英语也没有特别好，不过我倒是听明白了好几个人说的希望去英国，估计是这些话经常挂在嘴边吧。</span></p><p style=\"text-align: justify;\"><span style=\"font-family: 微软雅黑, \'Microsoft YaHei\'; font-size: 16px;\">我准备去附近的市政府问问开证明的事情，刚好在马路另外一边的一片休闲草坪附近，站着几个难民，有个大哥英文说的特别好，我跟他抱怨说警察不让我进去，他一直口口声声说没问题，说可以帮我进去，他的家人和朋友都在里面，可以邀请我去他们的帐篷里面坐坐。说实话我也很怀疑这个到底有没有用，不过看他一副很自信的样子，就跟着他一起返回去了。就在几个警察在跟另外的难民交涉的当口，我们准备从旁边进去，但是刚刚那个警察突然转过身拦住我，非常严厉的命令我赶紧离开这里，真的是用命令的语气。看样子硬来是行不通了，我准备直接去市政府了，才3点多，应该还没下班。</span></p><p style=\"text-align: justify;\"><span style=\"font-family: 微软雅黑, \'Microsoft YaHei\'; font-size: 16px;\">我们到对面的小花园附近聊了一会，这个大哥叫Ebo，27岁，是伊拉克来的库尔德人，他说他是穆斯林。他说帐篷里住的家人都是自己的表兄弟，爸妈都还留在伊拉克。我问他英语怎么这么好，他说自己之前也是学生，来这里四个月了，也是希望寻找机会去英国。他也尝试过几次，但是都没成功。我问他在外面干什么，他就说瞎逛啊，每天也没什么事情。说实话，并不是我对难民的有偏见，只是我看他穿着特别洋气，跟别的难民都不太一样，跟我上次在加莱看到的难民也有些不一样，总觉得他应该是“有钱人”。他跟我说自己去过英国，也去过巴黎，平常经常去敦刻尔克市中心逛街，看电影，到餐馆吃饭。我当时听了真的特别吃惊，这是我上次看到的那些吃饭都需要志愿者救济的难民营里的难民吗，这到底是个什么情况。</span></p><p style=\"text-align: justify;\"><span style=\"font-family: 微软雅黑, \'Microsoft YaHei\'; font-size: 16px;\"><span style=\"font-size: 16px;\">后来我看他的</span><span style=\"font-family: arial, helvetica, sans-serif; font-size: 16px;\">Facebook</span><span style=\"font-size: 16px;\">写的也不是自己的真正名字，而且说自己来自利兹（Leeds），在英国<span style=\"font-family: arial, helvetica, sans-serif; font-size: 16px;\">Portsmouth</span>高中读书，这明显不是真的。</span></span></p><p style=\"text-align: justify;\"><span style=\"font-family: 微软雅黑, \'Microsoft YaHei\'; font-size: 16px;\">起初我以为他们是希望去英国的愿望太强烈了，以至于用的也是英国的号码，在社交网络上写的也是关于英国的信息。但我后来反复琢磨终于有点明白，或许这些人根本就不是难民，只是趁着这次难民的浪潮混到难民营里，希望顺利偷渡到英国去，在英国扎根。如果我没猜错的话，我碰到的应该是一个“难民投机者”，暂且这么称呼吧，或许也不准确。</span></p><p style=\"text-align: justify;\"><span style=\"font-family: 微软雅黑, \'Microsoft YaHei\'; font-size: 16px;\"><span style=\"font-size: 16px;\">这类人或许还不在少数。后来我在路上看到刚刚跟那个大哥聊天的朋友，就跟他说我想去市政府，让他帮我带个路。这个穿着三叶草运动服的小哥倒是英语也很好，一口答应带我去。他叫</span><span style=\"font-family: arial, helvetica, sans-serif; font-size: 16px;\">Ali</span><span style=\"font-size: 16px;\">，也是伊拉克来的，今年才23岁。他说自己之前在英国工作过六个月，还是希望能回到英国去。说到平常在难民营的生活，他并没有表示这里的生活很无聊，说自己经常坐公交车去敦刻尔克市区吃饭逛街，也会去周围的球场踢球。他还特别跟我说，市区有很多他们那边的特色餐馆，可以带我去吃。听到我在巴黎读书，他说他计划这周五要去巴黎玩，还说可以一起去咖啡馆坐坐。而后来我也发现他的<span style=\"font-family: arial, helvetica, sans-serif; font-size: 16px;\">Facebook</span>名字居然还包含了一个<span style=\"font-family: arial, helvetica, sans-serif; font-size: 16px;\">Liverpool</span>，说自己来自伦敦，也真是让我大吃一惊。对大英帝国已经向往到这种程度了吗？我有点确信自己之前的怀疑。</span></span></p><p style=\"text-align: justify;\"><span style=\"font-family: 微软雅黑, \'Microsoft YaHei\'; font-size: 16px;\">我绞尽脑汁的在想，这些人，应该不是被生活所迫而来到难民营的吧？我找不到答案，报道中也没有人提到这一点，因为我看到的报道中，几乎都在竭力展现难民生活环境的脏乱差，表现难民的艰难。但我看到的这些，到底是什么？这是我接下来想要寻找寻找的答案。</span></p><p><span style=\"font-family: 微软雅黑, \'Microsoft YaHei\'; font-size: 16px;\">&nbsp;</span></p><p style=\"text-align: justify;\"><span style=\"font-family: 微软雅黑, \'Microsoft YaHei\'; font-size: 16px;\">市政府的工作人员倒是很友好，但可惜的是他们友好的拒绝了我的请求，说因为我是个体，没有资格进入，除非我是某个组织的正式成员。后来朋友告诉我，最近管的特别严格，为了自己的安全考虑，还是决定不要硬闯了。回家去的公交车上，碰到了不少看上去像难民的人，他们大摇大摆的上车，也不买票也不刷卡。按照刚才那几个人的说法，应该是去顿克市中心吧。朋友也告诉我，自己也经常在市中心看到类似的群体。</span></p><p style=\"text-align: justify;\"><span style=\"font-family: 微软雅黑, \'Microsoft YaHei\'; font-size: 16px;\">不得不说，在敦刻尔克我看到了另外一个难民群体。但是，那条将两个世界分开的马路，是让我更加难以释怀的。其实第二天一大早我又去了一次，但是天气特别不好，而且不巧的是，正当我走在难民营旁边的时候，一辆警车停在我的身边，起初我还以为自己又犯了什么错误，结果伸出头来的是还是昨天的那个警察！他还一副挑衅的表情问我去没去市政府，为了不生事，我还是很客气的跟他说明了情况，而且还很客气的跟他说了谢谢。面对这帮难缠的警察，有的时候还真得客气一些。</span></p><p><span style=\"font-family: 微软雅黑, \'Microsoft YaHei\'; font-size: 16px;\">&nbsp;</span></p><p><span style=\"font-family: arial, helvetica, sans-serif; font-size: 18px;\"><strong><span style=\"font-size: 18px; text-decoration: underline; background-color: yellow;\">Calais</span></strong></span><span style=\"font-family: 黑体, SimHei; font-size: 18px;\"><strong><span style=\"font-size: 18px; text-decoration: underline; background-color: yellow;\"></span></strong><strong><span style=\"font-size: 18px; text-decoration: underline; background-color: yellow;\">难民营的暴力拆迁</span></strong></span></p><p style=\"text-align: justify;\"><span style=\"font-family: 微软雅黑, \'Microsoft YaHei\'; font-size: 16px;\">第二天来到加莱难民营，则完全是另一番情景。这一天也是警察用暴力拆除难民营的第二天。昨天在Twitter上看到了警察用催泪弹等手段强行拆除难民营的照片和视频，今天来倒是有了一些心理准备。</span></p><p><img src=\"http://www.oushidai.com/static/upload/2016/03/06/20160306205253000000_1_42280_46.jpg\" style=\"width: 635px; height: 399px;\" width=\"635\" height=\"399\"></p><p><img src=\"http://www.oushidai.com/static/upload/2016/03/06/20160306205255000000_1_171024_43.jpg\" style=\"width: 631px; height: 406px;\" width=\"631\" height=\"406\"></p><p></p><p style=\"text-align: justify;\"><span style=\"font-family: 微软雅黑, \'Microsoft YaHei\'; font-size: 16px;\"><img src=\"http://www.oushidai.com/static/upload/2016/03/06/20160306210537000000_1_190075_70.jpg\" alt=\"http://www.oushidai.com/static/upload/2016/03/06/20160306210537000000_1_190075_70.jpg\" width=\"629\" height=\"408\" style=\"width: 629px; height: 408px;\"></span></p><p style=\"text-align: justify;\"><span style=\"font-family: 微软雅黑, \'Microsoft YaHei\'; font-size: 16px;\">很不巧的是，这几天天气都特别不好，就是那种风雨交加的天气，因为风太大，也没有办法打伞。从车站坐2号公交车到Les Dunes这一站，之后还需要在一条很偏僻的路上走四十多分钟。其实这里本来有10号线公交车的，但因为乘客实在是太少了，以至于每天只有三个班次，所以只能换上雨鞋，硬着头皮走下去。</span></p><p style=\"text-align: justify;\"><span style=\"font-family: 微软雅黑, \'Microsoft YaHei\'; font-size: 16px;\">身边不时有车辆经过，其中不少是警车，来来往往。过了一个天桥，就看到了不远处的难民营，毫不吃惊，路边这里停满了各种车辆。在最靠近难民营的一边停了整整一排警车，有些警察拿着枪站在外面。在马路的两侧停了很多国家来的电视台的采访车，还有一些志愿者组织的车辆和私家车辆。而且，在难民营的外面就能看到电视台的记者们站在最高处在拍摄。</span></p><p><span style=\"font-family: 微软雅黑, \'Microsoft YaHei\'; font-size: 16px; background-color: rgb(255, 255, 0);\"><strong>跟两个月前相比，整个加莱突然变得很热闹了。</strong></span></p><p><span style=\"font-family: 微软雅黑, \'Microsoft YaHei\'; font-size: 16px;\">&nbsp;</span></p><p><img src=\"http://www.oushidai.com/static/upload/2016/03/06/20160306205503000000_1_528156_16.jpg\" style=\"width: 628px; height: 421px;\" width=\"628\" height=\"421\"></p><p><img src=\"http://www.oushidai.com/static/upload/2016/03/06/20160306205507000000_1_343093_36.jpg\" style=\"width: 629px; height: 409px;\" width=\"629\" height=\"409\"></p><p><span style=\"font-family: 微软雅黑, \'Microsoft YaHei\'; font-size: 16px;\"></span><br></p><p style=\"text-align: justify;\"><span style=\"font-family: 微软雅黑, \'Microsoft YaHei\'; font-size: 16px;\">我看到不少扛着摄像机的记者都直接进入难民营了，好像这里警察都在忙着拆迁，已经顾不上来往的人流了，壮了壮胆，我就直接从入口进去了。</span></p><p style=\"text-align: justify;\"><span style=\"font-family: 微软雅黑, \'Microsoft YaHei\'; font-size: 16px;\">真的完全不一样了。难民营的南侧，已经有一大部分被铲成了平地，我记得两个月之前来的时候这里还长满了草，在小土坡上还住满了难民的，在最南侧还有一个简易的基督教堂的。然而现在只剩下一片平地了，真的有点难以接受。再次见到他们，我再也没有办法用“别来无恙”这个词来问候了。</span></p><p style=\"text-align: justify;\"><span style=\"font-family: 微软雅黑, \'Microsoft YaHei\'; font-size: 16px;\">（第一幅图是现在的加莱／第二幅图是12月30日的加莱）同一地点</span></p><p><img src=\"http://www.oushidai.com/static/upload/2016/03/06/20160306205639000000_1_596353_51.jpg\" style=\"width: 611px; height: 404px;\" width=\"611\" height=\"404\"></p><p><img src=\"http://www.oushidai.com/static/upload/2016/03/06/20160306205645000000_1_657379_86.jpg\" style=\"width: 609px; height: 403px;\" width=\"609\" height=\"403\"></p><p style=\"text-align: justify;\"><span style=\"font-family: 微软雅黑, \'Microsoft YaHei\'; font-size: 16px;\">继续沿着主路往里面走，左侧的高地上到处都站着拿着盾牌带着面罩全副武装的警察。难民营的北边的帐篷完好，好多帐篷上都写了Lieu de Vie这样的标语。雨下的太大了，又完全没有办法打伞。这时候有个大叔从帐篷里走出来，他手里端着一个锅，应该是要去做饭吧。他看到我，很热情的打招呼，他不会说法语，但是简单的英语还可以。不过他跟我说帐篷里有个英语特别好的哥们，非常热情得邀请我进帐篷里去聊聊。这时候雨下的特别大，能让我进帐篷我确实很感激；但说实话，作为一个女生，我还是有些顾虑的，脑子里一直在纠结要不要进去，有点犹豫不决。本来想告诉他们我们就在帐篷门口聊一聊就好了，后来那个英文讲的很好的大哥出来了，说进来聊吧，没关系的。最后，在他们的强烈邀请下我还是进去了。</span></p><p style=\"text-align: justify;\"><span style=\"font-family: 微软雅黑, \'Microsoft YaHei\'; font-size: 16px;\"><br></span></p><p style=\"text-align: justify;\"><span style=\"background-color: rgb(255, 255, 0); font-family: 黑体, SimHei;\"><strong><span style=\"background-color: rgb(255, 255, 0);\">巴基斯坦帐篷里的故事&nbsp;</span><br></strong></span></p><p style=\"text-align: justify;\"><span style=\"font-family: 微软雅黑, \'Microsoft YaHei\'; font-size: 16px;\"><img src=\"http://www.oushidai.com/static/upload/2016/03/06/20160306205926000000_1_368664_41.jpg\" alt=\"http://www.oushidai.com/static/upload/2016/03/06/20160306205926000000_1_368664_41.jpg\" width=\"628\" height=\"397\" style=\"width: 628px; height: 397px;\"></span></p><p style=\"text-align: justify;\"><span style=\"font-family: 微软雅黑, \'Microsoft YaHei\'; font-size: 16px;\">帐篷里面很黑，连拍出来的照片都是黑色的，只有一扇“小窗子”可以透进光来，并没有灯。我看到帐篷里坐了四五个男人，大家围坐在一起聊天，他们见到我进来也都很友好的打招呼。在这种风雨交加的天气里能让我进来，已经是雪中送炭了，这个黑黑的帐篷还确实很温暖。他们让我坐在毯子上，还找来另一条毯子让我盖在腿上，我觉得身上雨水太多怕给他们弄脏毯子，就没有盖。后来又有一个叔叔给我拿来一条干净毛巾，让我擦擦头，我说没关系，一会儿自己就干了。</span></p><p style=\"text-align: justify;\"><span style=\"font-family: 微软雅黑, \'Microsoft YaHei\'; text-align: justify;\">我问了他的名字，他写给我，叫<span style=\"font-family: arial, helvetica, sans-serif; text-align: justify;\">Sadiq</span> </span><span style=\"font-family: arial, helvetica, sans-serif; text-align: justify;\">Mohammed</span><span style=\"font-family: 微软雅黑, \'Microsoft YaHei\'; text-align: justify;\">，一看就知道是穆斯林，也确实，巴基斯坦也是有很多人信仰伊斯兰教的。他今年35岁，是巴基斯坦人，来加莱这边已经六个月了，之前在巴基斯坦是个厨师。他告诉我他们这个帐篷里都是巴基斯坦的兄弟，六个人一起吃住。巴基斯坦国内的几个党派一直有冲突，所以他们就逃难来到这里了，希望能去英国寻找更好的机会。几个大男人住在一起，也挺不容易的。我问他们平常在帐篷里都做些什么，他们说就是几个朋友之间聊聊天啊，没什么可干的。其实我知道，他们会把很多的心思放在如何逃离这个地方，或许畅想着未来。</span></p><p style=\"text-align: justify;\"><span style=\"font-family: 微软雅黑, \'Microsoft YaHei\'; text-align: justify;\">这个<span style=\"font-family: arial, helvetica, sans-serif;\">Mohammed</span>大哥英文果然超级棒，我开玩笑问他怎么学的一口流利的英语，他起初说自己在巴基斯坦读书的时候学过，后来聊天中才知道他之前在英国待过六年的时间，也是在那里做厨师。帐篷里还有一个人之前在意大利跟中国人一起工作过一段时间，会说“你好”这样简单的问候语。后来又进来一个大哥，他告诉我他之前在浙江义乌做过六个月的小买卖。听到我来自中国，他们有点激动，口口声声表示对中国的印象很好，一直说两国是邻国是朋友，但是细问下来他们其实并没有对中国了解太多，他们可能只是觉得这是一个亚洲强国。我告诉他中国也有穷人，他们刚开始听到有点吃惊，不过马上跟我说说会越来越好的，你们政府很强大等等之类的话。</span><br></p><p style=\"text-align: justify;\"><span style=\"font-size: 16px; font-family: 微软雅黑, \'Microsoft YaHei\';\">我说外面的警察们都在清理帐篷，你们没有担心自己吗？万一自己的帐篷也被清理了怎么办？他们告诉我自己并不担心，因为这些都是政府的决定，他们自己没有权利，只能凭他们怎么做。他们的态度就是走一步算一步，一切等警察来了再说，或许他们可以去其他的地方住，或许最后的选择才是那个集中营吧。他们只是觉得政府这样的话做法还是很暴力的，但也并不明白政府为什么要这么做。但是他告诉我大家都不希望住进那个集中营的房子里，因为那里简直像监狱。30个人住在一起，大家可能来自不同的地方价值观不同也容易引发冲突，再加上晚上大家的作息不一样，根本没有办法好好休息。而且有警察每天监视他们，基本上没有什么自由可言。<br></span></p><p style=\"text-align: justify;\"><img src=\"http://www.oushidai.com/static/upload/2016/03/06/20160306210504000000_1_136835_74.jpg\" alt=\"http://www.oushidai.com/static/upload/2016/03/06/20160306210504000000_1_136835_74.jpg\" width=\"618\" height=\"390\" style=\"width: 618px; height: 390px;\"></p><p><span style=\"font-family: 微软雅黑, \'Microsoft YaHei\'; text-align: justify;\">他们多次试图去英国，他告诉我他试过五六次，都是晚上爬上运货的那种卡车，然后可以再坐船过去。但不幸的是每次尝试都失败了，都是在卡车上被警察抓住，不过这并没有结束，他依然在试图再次寻找机会。他告诉我每次失败之后就会被警察抓起来拘留十五天，过一段更加痛苦的日子。他们说英国其实有很多巴基斯塔人，我很好奇，他们都是成功的跑过去的吗，他们给我的是一种苦笑，说并不是，人家是好几代人都在那里了，在英国做生意啊，开餐馆啊等等。说到这个，我可以听出他们其实心里是很向往的，向往成为他们那样的人。我问他们打算去英国干什么，他说可以做很多事情，比如他就想继续做厨师，甚至还希望开一家巴基斯坦特色餐馆；或者去英国开小商店，或许可以先跟着原先就在英国的巴基斯坦人一起做生意，等慢慢熟悉套路了就自己做，像巴基斯坦的毛毯生意就很有名。他们对英国的生活充满了无限的憧憬和希望。</span><br></p><p style=\"text-align: justify;\"><span style=\"font-family: 微软雅黑, \'Microsoft YaHei\'; font-size: 16px;\">我去的时候他们刚开始吃饭，我看他们做了传统的巴基斯坦菜，红色的卖相看上去跟我们楼里那个巴基斯坦妹子做的有些相似，因为我不能吃辣，所以就拒绝了他们的邀请。但是他们马上拿出一大罐新的可乐给我倒了一大杯，我还拿出来他们的点心，饼干，很热情的让我吃东西。真的很感谢他们。不过Mohammed大哥没有和伙伴们一起吃，我说你先吃饭吧，他说他们做的太辣了，他不能吃辣，因为胃之前检查有问题不能再吃辣了。后来我发现这些男人们吃完饭，一起做了个祈祷的手势，我估计是他们的宗教信仰的一种仪式。我没有宗教信仰，所以我没有办法想象宗教带给他们一种什么样的力量。不过我告诉他们我没有宗教信仰的时候，他们用一种很吃惊的表情看着我，我其实也不知道应该怎样跟他们解释。有些时候，我真的希望自己也有宗教信仰，有点好奇这是什么样的感觉。</span></p><p><img src=\"http://www.oushidai.com/static/upload/2016/03/06/20160306210731000000_1_640212_34.jpg\" alt=\"http://www.oushidai.com/static/upload/2016/03/06/20160306210731000000_1_640212_34.jpg\" width=\"623\" height=\"417\" style=\"width: 623px; height: 417px;\"></p><p style=\"text-align: justify;\"><span style=\"font-size: 16px; font-family: 微软雅黑, \'Microsoft YaHei\';\">&nbsp;<span style=\"font-size: 16px;\">后来我问他们来这里这么长时间，不想念家人吗？当然想啊！！！他们反应很强烈，用了无数个人very来形容他们的想念。他们说老婆孩子们都在家里，他们没有办法过来。我问他们有多少个小孩，他们听了这个笑着说很多呢！Mohammed告诉我之前在义乌工作过的那个叔叔最多，十一个！他自己有四个孩子。我说中国只能生两个，他们说知道啊，以前只能生一个，后来政府允许了。我说你们还很关心中国问题嘛，他说当然，咱们是邻居啊，好朋友。哈哈哈，谢谢你们亲爱的友人。我开玩笑问他们有没有电视，他们哈哈哈大笑，说你看这里连电都没有，去哪里看电视？真的没有电！！虽然用膝盖也能想得出来，在这种荒郊野外号称Jungle的帐篷里，根本就不可能有电啊，但是真的看到这种情况则又是另外一种感觉，我一时间难以接受，脑子里也想象不出来他们靠什么生活。有个年轻的男孩从唯一透得进光的那扇小窗子边指给我看，是一盏简易的灯，应该是那种用电池的。这些灯是英国的志愿者带给他们的，虽然及其简易，但对他们来说也足够了。他们告诉我大多数时候是用蜡烛的，有的时候也会用这种灯。我脑子里就开始浮现出大晚上一群人在帐篷里抹黑聊天的情形。</span></span></p><p style=\"text-align: justify;\"><span style=\"font-family: 微软雅黑, \'Microsoft YaHei\'; font-size: 16px;\">我说你们都老婆都不工作吗，他们又大笑了，我觉得这次是骄傲自豪的笑，他们说自己是家里的支柱啊，我们要养活一家人。其实我是明知故问，一个家里有十几个小孩，丈夫又在外面，老婆说什么也不可能去工作啊，连孩子都顾及不过来的。其实本来穆斯林女性就没有那么解放，大多数妇女还是以家庭为中心的。其实他们说到这个的时候特别强调自己是家里的顶梁柱，是他们给家里寄钱，支撑整个家庭的经济重担，他们希望给老婆孩子创造一个更好的生活。我可以看到这群在难民营的男人们对一个家庭的责任感以及承担家庭责任的自豪感，再看看他们现在的处境，我竟然一时间不知道说什么好。</span></p><p style=\"text-align: justify;\"><span style=\"font-family: 微软雅黑, \'Microsoft YaHei\'; font-size: 16px;\">真的很感谢他们在雨下得正大的时候收留我到帐篷里，还用待客的态度跟我聊天接待我。我离开的时候，他们主动要求跟我合一张影，我当然很乐意。英语讲的很棒的Mohammed送我出来，他说咱们来一张自拍吧，但因为他的手机好像没电了，我说用我的，到时候Facebook传给你，他特地叮嘱我别忘记。结果因为我从难民营回到住处简直又累又冷，就把这回事忘记了。他第二天还特地发短信提醒我，要我发给他。</span></p><p><span style=\"font-family: 微软雅黑, \'Microsoft YaHei\'; font-size: 16px;\">&nbsp;</span></p><p style=\"text-align: justify;\"><span style=\"font-family: 微软雅黑, \'Microsoft YaHei\'; font-size: 16px;\">出来的时候雨下的小了一些，往前面走了一段，就看到了很多人挤在一起，也听到了卡车轰轰隆隆拆迁的声音，围在卡车外面的依然是无数全副武装的警察。</span></p><p><img src=\"http://www.oushidai.com/static/upload/2016/03/06/20160306210939000000_1_492331_99.jpg\" style=\"width: 623px; height: 399px;\" width=\"623\" height=\"399\"></p><p><img src=\"http://www.oushidai.com/static/upload/2016/03/06/20160306210949000000_1_544046_46.jpg\" style=\"width: 622px; height: 413px;\" width=\"622\" height=\"413\"></p><p><img src=\"http://www.oushidai.com/static/upload/2016/03/06/20160306210950000000_1_720719_82.jpg\" style=\"width: 618px; height: 400px;\" width=\"618\" height=\"400\"></p><p style=\"text-align: justify;\"><span style=\"font-family: 微软雅黑, \'Microsoft YaHei\'; font-size: 16px;\">很多难民、志愿者、记者也都围在这里。今天的加莱实在是太热闹了，我记得两个月之前来的时候，唯一碰到的就是一个西班牙来的自由职业的摄影师；然而今天，几乎欧洲各个国家的记者都来了，他们带了很完备的采访设备和各种样式的摄影设备。</span></p><p style=\"text-align: justify;\"><span style=\"font-family: 微软雅黑, \'Microsoft YaHei\'; font-size: 16px;\">一些英国来的志愿者在安慰那些房子被拆迁了的难民。</span></p><p><img src=\"http://www.oushidai.com/static/upload/2016/03/06/20160306211225000000_1_557064_80.jpg\" style=\"width: 629px; height: 419px;\" width=\"629\" height=\"419\"></p><p><img src=\"http://www.oushidai.com/static/upload/2016/03/06/20160306211234000000_1_858561_74.jpg\" style=\"width: 630px; height: 410px;\" width=\"630\" height=\"410\"></p><p><img src=\"http://www.oushidai.com/static/upload/2016/03/06/20160306211235000000_1_292970_63.jpg\" style=\"width: 626px; height: 415px;\" width=\"626\" height=\"415\"></p><p style=\"text-align: justify;\"><span style=\"font-family: 微软雅黑, \'Microsoft YaHei\'; font-size: 16px;\">这一些房子被拆除的大多数是来自非洲的难民，我问了好几个都是来自埃塞俄比亚的。有两个埃塞俄比亚的小哥告诉我，他们之前在自己的国家是做电工之类的工作，也是因为国家战争来到加莱的。现在他们的帐篷已经被拆除了。我问那你们是准备去那边的集体宿舍住吗？他们很强烈的说不想住到那个集中营里，因为三十多个人住在一起实在是一种地狱般的生活，他在难民营的北边有另外的亲戚朋友，可以去那边住一段时间。</span></p><p><img src=\"http://www.oushidai.com/static/upload/2016/03/06/20160306211339000000_1_639846_25.jpg\" style=\"width: 634px; height: 402px;\" width=\"634\" height=\"402\"></p><p><img src=\"http://www.oushidai.com/static/upload/2016/03/06/20160306211343000000_1_619594_4.jpg\" style=\"width: 630px; height: 417px;\" width=\"630\" height=\"417\"></p><p style=\"text-align: justify;\"><span style=\"font-family: 微软雅黑, \'Microsoft YaHei\'; font-size: 16px;\">穿过人群，来到另外一侧的主路，这条路上基本上是难民营西侧主要的通道。但是这里现在已经挖了一条很深的沟，拆迁也仍在继续。依然是人来人往。</span></p><p><img src=\"http://www.oushidai.com/static/upload/2016/03/06/20160306211432000000_1_685053_28.jpg\" style=\"width: 632px; height: 405px;\" width=\"632\" height=\"405\"></p><p><img src=\"http://www.oushidai.com/static/upload/2016/03/06/20160306211437000000_1_659470_41.jpg\" style=\"width: 632px; height: 423px;\" width=\"632\" height=\"423\"></p><p><span style=\"font-family: 微软雅黑, \'Microsoft YaHei\'; text-align: justify;\">我来到难民营的西北侧，远离了拆迁的工程，这里还是比较安静的，书店、简易餐馆、简易酒吧，简易教堂等等都还在，这边的人们也都还像往常一样生活着，小孩子们也都在这边骑车玩耍。</span></p><p><span style=\"font-family: 微软雅黑, \'Microsoft YaHei\'; font-size: 16px;\">&nbsp;</span></p><p><img src=\"http://www.oushidai.com/static/upload/2016/03/06/20160306211535000000_1_480935_13.jpg\" style=\"width: 647px; height: 400px;\" width=\"647\" height=\"400\"></p><p><img src=\"http://www.oushidai.com/static/upload/2016/03/06/20160306211541000000_1_787139_20.jpg\" style=\"width: 645px; height: 407px;\" width=\"645\" height=\"407\"></p><p><img src=\"http://www.oushidai.com/static/upload/2016/03/06/20160306211549000000_1_866062_30.jpg\" style=\"width: 637px; height: 411px;\" width=\"637\" height=\"411\"></p><p><img src=\"http://www.oushidai.com/static/upload/2016/03/06/20160306211551000000_1_632886_41.jpg\" style=\"width: 627px; height: 419px;\" width=\"627\" height=\"419\"></p><p><span style=\"background-color: rgb(255, 255, 0);\"><strong><span style=\"background-color: rgb(255, 255, 0); font-family: 黑体, SimHei;\">阿富汗学生的故事</span></strong></span></p><p style=\"text-align: justify;\"><span style=\"font-family: 微软雅黑, \'Microsoft YaHei\'; font-size: 16px;\">我找到了上次来的那个叫Thêatre的艺术中心，我碰到了一个来自阿富汗的小哥，他叫Zekria Zaki，1995年出生的。他告诉我他之前在阿富汗读书，专业是医学。跟其他难民不同的是，他说自己希望留在法国继续自己的学业。他对生活还是挺乐观的，他觉得在欧洲不管哪个国家都是一样的，即使法国不行，他也希望可以去别的国家，他一直跟我说来到欧洲是希望寻找和平，他不愿意看到警察这样的行为。</span></p><p style=\"text-align: justify;\"><span style=\"font-family: 微软雅黑, \'Microsoft YaHei\'; font-size: 16px;\">他还有另一点与众不同的是，但是他说自己希望住到container里面，因为那里面比较干净，也可以洗澡，但是在帐篷条件就要差一些，他说他只是希望去container“住”，也就是晚上去睡一下，但他不希望在那里“生活”，他说他白天还是希望到帐篷这边，到这个跟大家一起生活，到Thêatre跟大家一起做手工。其实，那个30个人住一间的集中营，确实不是生活的地方。他说现在已经有一些人住进去了，有妇女也有小孩子，他自己还不确定，一切也都不由自己说了算，但是该来的总是会来的。说到这次的难民营清理，他倒是没有什么太激愤的态度，他对法国一直持有一种很“敬仰”的态度，觉得政府做什么决定应该都有他们自己的想法吧。他一直很强调“欧洲”这个概念，在他眼里欧洲就是可以给他生活带来希望的地方，他希望在欧洲可以得到和平的环境。或许是自己的国家阿富汗给他们带来了太多的痛苦的记忆了吧。</span></p><p style=\"text-align: justify;\"><span style=\"font-family: 微软雅黑, \'Microsoft YaHei\'; font-size: 16px;\">后来在聊天中才慢慢知道，他没有家人，他是一个人来这里的。我说你的家人都在阿富汗不能一起来对吗？他说不是的，他们有兄弟姐妹，没有父母，他们的都在阿富汗的战争中死去了。我不知道如何面对这样的现实，但是小伙子显得很淡定，后来我才想明白这就是他为什么会说自己来欧洲就是寻找和平的，他为什么会说自己“有很长的故事”。我不知道如何开口，让他告诉我他的故事，但我知道这是个悲伤的故事。我希望，可能的话，让他跟我说说。</span></p><p><img src=\"http://www.oushidai.com/static/upload/2016/03/06/20160306211830000000_1_672121_16.jpg\" style=\"width: 632px; height: 416px;\" width=\"632\" height=\"416\"></p><p><img src=\"http://www.oushidai.com/static/upload/2016/03/06/20160306211834000000_1_739727_94.jpg\" style=\"width: 628px; height: 413px;\" width=\"628\" height=\"413\"></p><p style=\"text-align: justify;\"><span style=\"font-family: 微软雅黑, \'Microsoft YaHei\'; font-size: 16px;\">这个他们平常一起玩的“剧院”Thêatre，这是类似于一个文化中心的地方，大家一起在这里做手工，做“模拟法庭”等等，我去的时候他们正在里面打排球。我站在旁边了一会，外面的催泪弹，外面的暴力驱逐似乎与他们没有关系，他们在这个“剧院”，寻求的真的是一份安静的生活，是一种真正意义上的生活，但是可能有的时候，生活真的不是那么容易。</span></p><p style=\"text-align: justify;\"><span style=\"font-family: 微软雅黑, \'Microsoft YaHei\'; font-size: 16px;\">几个调皮的男生搞鬼，拦着我不让我出去，问我是哪里人，我说我是中国人，他们得寸进尺，让我给他们唱首歌再出去。经过一番交涉，好不容易让我出去，碰到了另一个年轻的帅小伙，这个小伙子看上去很年轻，他说他的爸爸已经在英国了，所以自己也想去找他。这个小伙子刚开始以为我是日本人，我说我是中国人。后来我问他们为什么会以为我是日本人，他告诉我其实在他们眼里，东亚人都长的差不多啊，日本人，中国人，越南人啊等等，欧洲人也是一类人，非洲人也是一类人。原来他们眼里，人群是这样划分的人，他们眼里的地区概念比较强，并没有具体的国家。这就是他为什么跟我说法国，德国，瑞士等等其实都一样，都比他们原先生活的地方要好，都是可以给他们提供理想生活的地方。</span></p><p style=\"text-align: justify;\"><span style=\"font-family: 微软雅黑, \'Microsoft YaHei\'; font-size: 16px;\">后来他带我去看了一个简陋的“诊所”，说是诊所，其实里面就一张简易的床，一张椅子，淡绿色的窗帘半遮着那张床。里面并没有人，我说为什么？他说这不是最近几天警察在清理难民营，这边的志愿者和医生都跑到那边去了，他指的“那边”就是难民营的南边，就是第一波难民营拆除主要清理的地方。</span></p><p style=\"text-align: justify;\"><span style=\"font-family: 微软雅黑, \'Microsoft YaHei\'; font-size: 16px;\">靠近“小剧院”的地方，有一个专门为妇女儿童服务的中心，这里的负责人是一个叫Liz的英国女人，她从去年六月份就开始在这里无偿做着志愿者的服务。她是第一次来到这里之后，就才决定长期留下来的。Liz一直跑东跑西的忙着，其他的志愿者也是来来回回的忙碌着，其中一个也是英国人叫Helen，她来这边已经做志愿者三个月了，我问她为什么来这里做志愿者，她说她很喜欢这里的工作，喜欢跟孩子们在一起，而且她觉得这些简单零碎的志愿者工作很有价值。后来我想了很多，特别佩服她，我想，如果我有机会，我也希望可以到这里来做志愿者，不是体验生活，而是真正做些事情。也许在加莱难民营，最让我感动最让我佩服的，就是这些志愿者了。他们可以没有网络不用电脑，可以不玩手机不看社交朋友圈，他们的生活在这里变得很简单很纯粹，就是与孩子们在一起。我不知道已经被现代化生活奴隶了的我们，还能不能做到这一点。我确实很想过这种很纯粹的生活。就像暑假里去支教，跟孩子们在操场上一起玩耍，就特别开心。</span></p><p><img src=\"http://www.oushidai.com/static/upload/2016/03/06/20160306212111000000_1_567522_57.jpg\" alt=\"http://www.oushidai.com/static/upload/2016/03/06/20160306212111000000_1_567522_57.jpg\" width=\"624\" height=\"413\" style=\"width: 624px; height: 413px;\"></p><p style=\"text-align: justify;\"><span style=\"font-family: 微软雅黑, \'Microsoft YaHei\'; font-size: 16px;\">第三天天气还是特别差，暴力拆迁依然在继续。</span></p><p style=\"text-align: justify;\"><span style=\"font-family: 微软雅黑, \'Microsoft YaHei\'; font-size: 16px;\"><br></span></p><p style=\"text-align: justify;\"><span style=\"font-family: 微软雅黑, \'Microsoft YaHei\'; font-size: 16px;\">我不知道一个月之后再来这里的话，会是一番怎样的情景。最近法国的各大报纸都在报道加莱的这次拆迁，难民的反抗，警察的暴力，大火燃烧的场面……有的时候，当你没去过这些地方的时候，看到这些报道脑海中并没有一个具体的概念；但是当我去过之后再来看这些报道，总会觉得这些地方特别熟悉，或者说与自己有一些联系。</span></p><p style=\"text-align: justify;\"><span style=\"font-family: 微软雅黑, \'Microsoft YaHei\'; font-size: 16px;\">这一次在敦刻尔克和加莱，我看到了生活状况完全不一样的难民。这是一个很复杂的问题。我只是希望每个人都可以找到自己希望的生活，寻找到和平。</span></p><p style=\"text-align: justify;\"><span style=\"font-family: 微软雅黑, \'Microsoft YaHei\'; font-size: 16px;\"><span style=\"font-size: 16px;\">我想这些难民问题与我想研究的移民身份认同问题还是有很多不同的，因为对于这些难民来说，主要的问题不是</span><span style=\"font-size: 16px;\">“</span><span style=\"font-size: 16px;\">身份认同</span><span style=\"font-size: 16px;\">”</span><span style=\"font-size: 16px;\">，而首先是生存下来，如何寻求更好的出路和未来。至于身份，究竟是苏丹人巴基斯坦人还是法国人，对于他们来说倒未必是值得考虑的问题。</span></span></p><p style=\"text-align: justify;\"><span style=\"font-family: 微软雅黑, \'Microsoft YaHei\'; font-size: 16px;\">我希望在这里找到我想知道的事情。</span></p><p><img src=\"http://www.oushidai.com/static/upload/2016/03/06/20160306212253000000_1_417751_8.jpg\" alt=\"http://www.oushidai.com/static/upload/2016/03/06/20160306212253000000_1_417751_8.jpg\" width=\"640\" height=\"400\" style=\"width: 640px; height: 400px;\"></p><p><br></p>'
      }
    })

    /**
     * 作者个人信息接口
     */
    Mock.mock(/\/information\/ajax\/get_author_info(.*)/, 'get', {
      'error': '1000',
      'errmsg': '成功',
      'data': {
        'id': function () {
          return Mock.Random.id()
        },
        'name': function () {
          return Mock.Random.first() + '_' + Mock.Random.last()
        },
        'avatar': function () {
          return 'http://temp.im/60x60'
        },
        'banner': function () {
          return 'http://oushinet.alltosun.net/img/tmp/user-banner/' + Mock.Random.integer(1, 11) + '.jpg'
        },
        'type|1': ['writer', 'mediaOrg'], // ['writer', 'mediaOrg', 'eventOrg', 'user'],
        'level|0-9': 1,
        'intro': '车到山前必有路，船到桥头自然直,车到山前必有路，船到桥头自然直',
        'fans|0-19999': 1,
        'article|0-9999': 1,
        'liked|0-9999': 1,
        'comments|0-9999': 1,
        'event|0-9999': 1,
        'followed|1': ['true', 'false']
      }
    })

    /**
     * 活动机构信息接口
     */
    Mock.mock(/\/activity\/ajax\/get_author_info(.*)/, 'get', {
      'error': '1000',
      'errmsg': '成功',
      'data': {
        'id': function () {
          return Mock.Random.id()
        },
        'name': function () {
          return Mock.Random.first() + '_' + Mock.Random.last()
        },
        'avatar': function () {
          return 'http://temp.im/60x60'
        },
        'banner': function () {
          return 'http://oushinet.alltosun.net/img/tmp/user-banner/' + Mock.Random.integer(1, 11) + '.jpg'
        },
        'type|1': ['eventOrg'], // ['writer', 'mediaOrg', 'eventOrg', 'user'],
        'level|0-9': 1,
        'intro': '车到山前必有路，船到桥头自然直,车到山前必有路，船到桥头自然直',
        'fans|0-19999': 1,
        'article|0-9999': 1,
        'liked|0-9999': 1,
        'comments|0-9999': 1,
        'event|0-9999': 1,
        'followed|1': ['true', 'false']
      }
    })

    /**
     * 媒体机构简介信息接口
     */
    Mock.mock(/\/media_org\/ajax\/get_media_org_intro(.*)/, 'get', {
      'error': '1000',
      'errmsg': '成功',
      'data': {
        'intro': function () {
          return '<p>' + Mock.Random.csentence(30, 50) + '</p>' + '<p>' + Mock.Random.csentence(30, 150) + '</p>'
        },
        'weixin': function () {
          return Mock.Random.first() + Mock.Random.last()
        },
        'qr': 'http://www.oushidai.com/static/upload/2016/01/22/20160122185637000000_1_158648_39.jpg',
        'email': function () {
          return Mock.Random.email('gmail.com')
        }
      }
    })

    /**
     * 媒体机构热门文章接口
     */
    Mock.mock(/\/media_org\/ajax\/get_media_org_hot(.*)/, 'get', {
      'error': '1000',
      'errmsg': '成功',
      'data': {
        'list|5': [{
          'id': function () {
            return Mock.Random.id()
          },
          'type': 'news',
          'pic': function () {
            return 'https://unsplash.it/' + Mock.Random.integer(700, 1200) + '/' + Mock.Random.integer(300, 1200) + '/?' + Mock.Random.id()
          },
          'title': function () {
            return Mock.Random.ctitle(12, 30)
          },
          'author': {
            'type|1': ['mediaOrg', 'writer'],
            'name': function () {
              return Mock.Random.cname()
            },
            'uid': function () {
              return Mock.Random.id()
            },
            'avatar': function () {
              return 'https://unsplash.it/30/30/?' + Mock.Random.id()
            },
            'homepage': '#'
          },
          'time': function () {
            return Mock.Random.datetime('yyyy-MM-dd HH:mm:ss')
          }
        }]
      }
    })

    /**
     * 相似媒体机构列表接口
     */
    Mock.mock(/\/media_org\/ajax\/get_media_org_similar(.*)/, 'get', {
      'error': '1000',
      'errmsg': '成功',
      'data': {
        'list|5': [{
          'uid': function () {
            return Mock.Random.id()
          },
          'type': 'mediaOrg',
          'name': function () {
            return Mock.Random.cname()
          },
          'avatar': function () {
            return 'https://unsplash.it/60/60/?' + Mock.Random.id()
          },
          'homepage': '#',
          'tags|1-2': [{
            'tag': function () {
              return Mock.Random.cword(2, 5)
            },
            'id': function () {
              return Mock.Random.id()
            },
            'url': '#'
          }],
          'local': function () {
            return Mock.Random.cword(2, 4)
          },
          'article|0-9999': 1,
          'fans|0-19999': 1
        }]
      }
    })

    /**
     * 某个用户的粉丝数据
     */
    Mock.mock(/\/follow\/ajax\/get_userpage_fans_list(.*)/, 'get', {
      'error': '1000',
      'errmsg': '成功',
      'data': {
        'list|10': [{
          'info': {
            'uid': function () {
              return Mock.Random.id()
            },
            'name': function () {
              return Mock.Random.cname()
            },
            'intro': function () {
              return Mock.Random.csentence(0, 50)
            },
            'avatar': function () {
              return 'https://unsplash.it/60/60/?' + Mock.Random.id()
            },
            'homepage': '#',
            'type|1-2': [{
              'name|1': ['writer', 'mediaOrg', 'user'],
              'level|0-9': 1
            }],
            'bgpic': function () {
              return 'https://unsplash.it/' + Mock.Random.integer(700, 1200) + '/' + Mock.Random.integer(300, 1200) + '/?' + Mock.Random.id()
            },
            'local': '',
            'tags': [],
            'follow|0-19999': 1,
            'fans|0-19999': 1
          },
          'followed|1': ['true', 'false'],
          'article': {
            'num': '1',
            'list': [{
              'title': '门儿文章测试标题',
              'id': '91',
              'link': 'http://oushinet.alltosun.net/information/pc/91'
            }]
          }
        }]
      }
    })

    /**
     * 活动列表
     */
    // Mock.mock(/\/activity\/ajax\/activity_list(.*)/, 'get', {
    //   'error': '1000',
    //   'errmsg': '成功',
    //   'data': {
    //     'list|10': [{
    //       'id|1-999999': 1,
    //       'type': 'event',
    //       'userPage': {
    //         'id|1-999999': 1,
    //         'type': 'eventOrg'
    //       },
    //       'pic': function () {
    //         return 'https://unsplash.it/' + Mock.Random.integer(400, 600) + '/' + Mock.Random.integer(400, 600) + '/?_=' + Mock.Random.id()
    //       },
    //       'pic_size': {
    //         'w': '457',
    //         'h': '276'
    //       },
    //       'tags|1-2': [{
    //         'tag': function () {
    //           return Mock.Random.cword(1, 5)
    //         },
    //         'id': function () {
    //           return Mock.Random.id()
    //         }
    //       }],
    //       'title': function () {
    //         return Mock.Random.ctitle(12, 30)
    //       },
    //       'info': function () {
    //         return Mock.Random.cword(25, 50)
    //       },
    //       'link': 'event-content.html',
    //       'event_type': 'org',
    //       'author': {
    //         'name': function () {
    //           return Mock.Random.cname()
    //         },
    //         'uid': function () {
    //           return Mock.Random.id()
    //         },
    //         'avatar': function () {
    //           return 'https://unsplash.it/30/30/?_=' + Mock.Random.id()
    //         },
    //         'type': 'eventOrg',
    //         'homepage': '#'
    //       },
    //       'pub_time': function () {
    //         return Mock.Random.datetime('yyyy-MM-dd HH:mm:ss')
    //       },
    //       'event_time': [{
    //         'start': function () {
    //           return Mock.Random.datetime('yyyy-MM-dd HH:mm:ss')
    //         },
    //         'end': function () {
    //           return Mock.Random.datetime('yyyy-MM-dd HH:mm:ss')
    //         },
    //         'place': function () {
    //           return Mock.Random.cword(1, 5)
    //         }
    //       }],
    //       'is_over': 'false',
    //       'view': {
    //         'num|1-99999': 1
    //       },
    //       'watch': {
    //         'num|1-99999': 1
    //       },
    //       'join': {
    //         'num|1-99999': 1
    //       }
    //     }]
    //   }
    // })
    Mock.mock(/\/activity\/ajax\/activity_list(.*)/, 'get', {
      'error': '1000',
      'errmsg': '成功',
      'data': {
        'list|10': [{
          'id|1-99999': 1,
          'type': 'event',
          'event_type': 'org',
          'userPage': {
            'id|1-99999': 1,
            'type': ''
          },
          'pic': function () {
            return 'https://unsplash.it/' + Mock.Random.integer(400, 600) + '/' + Mock.Random.integer(400, 600) + '/?_=' + Mock.Random.id()
          },
          'pic_size': {
            'w': '100',
            'h': '100'
          },
          'is_over|1': ['true', 'false'],
          'tags|1-2': [{
            'tag': '标签',
            'id|1-99999': 1,
            'url': '#'
          }],
          'title': function () {
            return Mock.Random.ctitle(10, 20)
          },
          'info': function () {
            return Mock.Random.ctitle(20, 50)
          },
          'link': '#',
          'author': {
            'name': function () {
              return Mock.Random.cname()
            },
            'uid|1-99999': 1,
            'avatar': 'http://temp.im/60x60',
            'homepage': '#'
          },
          'time': function () {
            return Mock.Random.datetime('yyyy-MM-dd HH:mm:ss')
          },
          'join': {
            'num|0-99999': 1
          },
          'watch': {
            'num|0-99999': 1
          },
          'view': {
            'num|0-99999': 1
          },
          'event_info': [{
            'start_time': function () {
              return Mock.Random.datetime('yyyy-MM-dd HH:mm:ss')
            },
            'end_time': function () {
              return Mock.Random.datetime('yyyy-MM-dd HH:mm:ss')
            },
            'place': function () {
              return Mock.Random.ctitle(2, 5)
            },
            'cost': {
              'amount|1': ['0', '0', '12.34'],
              'unit': '€',
              'is_equally': 'false',
              'is_others': 'false',
              'exp': function () {
                return Mock.Random.ctitle(10, 50)
              }
            }
          }]
        }]
      }
    })
    /**
     * 活动焦点图
     */
    Mock.mock(/\/activity\/ajax\/recommend_list(.*)/, 'get', {
      'error': '1000',
      'errmsg': '成功',
      'data': {
        'focus|5': [{
          'author': {
            'name': function () {
              return Mock.Random.ctitle(2, 4)
            },
            'avatar': 'http://temp.im/60x60',
            'homepage': '#',
            'type|1': ['eventOrg']
          },
          'category|1-10': 1,
          'format_time': '前天',
          'id|1-999': 1,
          'title': function () {
            return Mock.Random.ctitle(20, 30)
          },
          'time': function () {
            return Mock.Random.datetime('yyyy-MM-dd HH:mm:ss')
          },
          'type': 'event',
          'link': 'www.baidu.com',
          'view': {
            'num|0-9999': 1
          },
          'watch': {
            'num|0-99999': 1
          },
          'pic': function () {
            return 'http://temp.im/640x320'
          },
          'event_info': [{
            'start_time': function () {
              return Mock.Random.datetime('yyyy-MM-dd HH:mm:ss')
            },
            'end_time': function () {
              return Mock.Random.datetime('yyyy-MM-dd HH:mm:ss')
            },
            'place': function () {
              return Mock.Random.ctitle(2, 5)
            },
            'cost': {
              'amount|1-100': 1,
              'unit': '€',
              'is_equally': 'false',
              'is_others': 'false',
              'exp': function () {
                return Mock.Random.ctitle(10, 50)
              },
              'place': '巴黎'
            }
          }],
          'tags|1-2': [{
            'tag': function () {
              return Mock.Random.cword(1, 5)
            },
            'id': function () {
              return Mock.Random.id()
            },
            'url': '#'
          }]
          // 'like': {
          //   'num|1-999': 1,
          //   'is_liked|1': false
          // }
        }]
      }
    })
    /**
     * 活动详情
     */
    // Mock.mock(/\/api\/1\/activity\/detail(.*)/, 'get', {
    //   'error': '1000',
    //   'errmsg': '成功',
    //   'data': {
    //     'add_time': function () {
    //       return Mock.Random.datetime('yyyy-MM-dd HH:mm:ss')
    //     },
    //     'address': function () {
    //       return Mock.Random.county(true) + Mock.Random.zip()
    //     },
    //     'album_auth|0-1': 1,
    //     'can_register|0-1': 1,
    //     'category|1-9999': 1,
    //     'city_id': function () {
    //       return Mock.Random.city()
    //     },
    //     'comment_num|0-99999': 1,
    //     'content': function () {
    //       let content = ''
    //       for (var i = 0; i < Mock.Random.natural(5, 10); i++) {
    //         content += '<p>' + Mock.Random.cparagraph(5, 20) + '</p>'
    //       }
    //       return content
    //     },
    //     'cost|1': ['123', 'aa', 'other'],
    //     'cost_intro': function () {
    //       let content = ''
    //       for (var i = 0; i < Mock.Random.natural(5, 10); i++) {
    //         content += '<p>' + Mock.Random.cparagraph(5, 20) + '</p>'
    //       }
    //       return content
    //     },
    //     'country_id|1': ['英国', '法国', '德国', '意大利'],
    //     'cover': function () {
    //       return 'http://temp.im/' + Mock.Random.integer(350, 600) + 'x' + Mock.Random.integer(150, 300)
    //     },
    //     'deadline': function () {
    //       return Mock.Random.datetime('yyyy-MM-dd HH:mm:ss')
    //     },
    //     'email': function () {
    //       return Mock.Random.email()
    //     },
    //     'end_time': function () {
    //       return Mock.Random.datetime('yyyy-MM-dd HH:mm:ss')
    //     },
    //     'expert_id|1-99999': 1,
    //     'follow_num|1-9999': 1,
    //     'frequency_type|1': [0, 1],
    //     'id|1-99999': 1,
    //     'if_invite|1': [0, 1],
    //     'is_index_recommend|1': [0, 1],
    //     'is_limited|1': [0, 1],
    //     'is_recommend|1': [0, 1],
    //     'max_num|1-20': 1,
    //     'min_num|21-9999': 1,
    //     'org_id|1-99999': 1,
    //     'org_info': [{
    //       'activity_num|1-99999': 1,
    //       'avatar': function () {
    //         return 'http://temp.im/60x60'
    //       },
    //       'is_follow|1-99999': 1,
    //       'type': 'activity_org'
    //     }],
    //     'parent_id|1-99999': 1,
    //     'participation|1-99999': 1,
    //     'participation_info': [{
    //       'activity_id|1-99999': 1,
    //       'add_time': function () {
    //         return Mock.Random.datetime('yyyy-MM-dd HH:mm:ss')
    //       },
    //       'id|1-99999': 1,
    //       'status|1': [0, 1],
    //       'update_time': function () {
    //         return Mock.Random.datetime('yyyy-MM-dd HH:mm:ss')
    //       },
    //       'user_id|1-99999': 1,
    //       'user_info|100': [{
    //         'avatar': 'http://temp.im/60x60',
    //         'id|1-99999': 1,
    //         'nickname': function () {
    //           return Mock.Random.cname()
    //         }
    //       }]
    //     }],
    //     'place_name': function () {
    //       return Mock.Random.cword(2, 10)
    //     },
    //     'praise_num|0-99999': 1,
    //     'publish_time': function () {
    //       return Mock.Random.datetime('yyyy-MM-dd HH:mm:ss')
    //     },
    //     'share_num|0-99999': 1,
    //     'site': function () {
    //       return Mock.Random.url('http', 'oushidai.com')
    //     },
    //     'start_time': function () {
    //       return Mock.Random.datetime('yyyy-MM-dd HH:mm:ss')
    //     },
    //     'status|1': [0, 1, 2],
    //     'tags': '标签1,标签2,标签3',
    //     'tel|13980000000-13989999999': 1,
    //     'title': function () {
    //       return Mock.Random.ctitle(12, 40)
    //     },
    //     'uid|1-99999': 1,
    //     'update_time': function () {
    //       return Mock.Random.datetime('yyyy-MM-dd HH:mm:ss')
    //     },
    //     'user_id|1-99999': 1,
    //     'view_num|0-99999': 1,
    //     'zip_code': function () {
    //       return Mock.Random.zip()
    //     }
    //   }
    // })
    Mock.mock(/\/activity\/ajax\/activity_content(.*)/, 'get', {
      'data': {
        'author': {
          'avatar': 'http://temp.im/60x60',
          'events|1-99999': 1,
          'fans': {
            'list': [{
              'avatar': 'http://temp.im/60x60',
              'name': function () {
                return Mock.Random.cname()
              },
              'uid|1-99999': 1
            }],
            'num|1-9999': 1
          },
          'homepage': '#',
          'intro': '车到山前必有路，船到桥头自然直,车到山前必有路，船到桥头自然直',
          'name': function () {
            return Mock.Random.cname()
          },
          'type': 'eventOrg',
          'uid|1-99999': 1
        },
        'category': {
          'id': 1,
          'name': function () {
            return Mock.Random.cword(2, 5)
          }
        },
        'comment': {
          'list': [],
          'num|1-99999': 1
        },
        'contact': {
          'email': function () {
            return Mock.Random.email('gmail.com')
          },
          'site': 'http://www.baidu.com/dsafasf/ds/af/asfds/f/ds/fsd/fd/sf/sdf/s/fds/f/dsf/dsf/sdf/sd/',
          'tel|13980000000-13989999999': 1
        },
        'cover': function () {
          return 'http://temp.im/' + Mock.Random.integer(350, 600) + 'x' + Mock.Random.integer(150, 300)
        },
        'description': function () {
          let content = ''
          for (var i = 0; i < Mock.Random.natural(5, 10); i++) {
            content += '<p>' + Mock.Random.cparagraph(5, 20) + '</p>'
          }
          return content
        },
        'disclaimer': function () {
          let content = ''
          for (var i = 0; i < Mock.Random.natural(5, 10); i++) {
            content += '<p>' + Mock.Random.cparagraph(5, 20) + '</p>'
          }
          return content
        },
        'event_time': [{
          'end': function () {
            return Mock.Random.datetime('yyyy-MM-dd HH:mm:ss')
          },
          'place|1': ['巴黎', '纽约', '伦敦', '北京'],
          'start': function () {
            return Mock.Random.datetime('yyyy-MM-dd HH:mm:ss')
          }
        }],
        'id|1-99999': 1,
        'info': [{
          'addr': '48-50 Rue Benoît Malon',
          'city': 'Gentilly',
          'country': 'France',
          'deadline': function () {
            return Mock.Random.datetime('yyyy-MM-dd HH:mm:ss')
          },
          'number': {
            'max|20-100': 1,
            'min|0-19': 1
          },
          'place': '北京互动阳光科技有限公司',
          'price|0-100': 1,
          'price_info': function () {
            let content = ''
            for (var i = 0; i < Mock.Random.natural(5, 10); i++) {
              content += '<p>' + Mock.Random.cparagraph(5, 20) + '</p>'
            }
            return content
          },
          'price_type|1': ['aa', 'other', ''],
          'time': {
            'end': function () {
              return Mock.Random.datetime('yyyy-MM-dd HH:mm:ss')
            },
            'start': function () {
              return Mock.Random.datetime('yyyy-MM-dd HH:mm:ss')
            }
          },
          'zip': '94250'
        }],
        'is_over|1': true,
        'like': {
          'is_liked|1': true,
          'num|0-99999': 1
        },
        'need_signup|1': true,
        'next': {
          'id|1-99999': 1
        },
        'prev': {
          'id|1-99999': 1
        },
        'price_info': '费用说明费用说明费用说明费用说明费用说明费用说明费用说明费用说明',
        'pub_time': function () {
          return Mock.Random.datetime('yyyy-MM-dd HH:mm:ss')
        },
        'sign_list|0-100': [{
          'uid|1-99999': 1,
          'name': function () {
            return Mock.Random.cname()
          },
          avatar: 'http://temp.im/60x60'
        }],
        'tags|1-3': [{
          'id|1-99999': 1,
          'tag': function () {
            return Mock.Random.cword(1, 5)
          }
        }],
        'title': function () {
          return Mock.Random.ctitle(12, 30)
        },
        'type': 'event',
        'view': {
          'num|0-99999': 1
        },
        'watch': {
          'is_watched|1': true,
          'num|1-99999': 1
        }
      },
      'errmsg': '成功',
      'error': 1000
    })

      /**
       * 活动机构简介信息接口
       */
    Mock.mock(/\/activity_org\/ajax\/get_activity_org_intro(.*)/, 'get', {
      'error': '1000',
      'errmsg': '成功',
      'data': {
        'business_hours': '周一至周日9:00-19:00',
        'tel|1231111111111-1239999999999': 1,
        'site': function () {
          return Mock.Random.url()
        },
        'local': {
          'country': '法国',
          'city': '巴黎'
        },
        'public_transportation': {
          'metor': '无',
          'bus': '125',
          'tramway': 'T3',
          'rer': 'B',
          'other': '这是一个其它公交线路的说明'
        },
        'zip': '94250',
        'address': '48-50 Rue Benoît Malon，94250 Gentilly',
        'intro': function () {
          return '<p>' + Mock.Random.csentence(30, 50) + '</p>' + '<p>' + Mock.Random.csentence(30, 150) + '</p>'
        },
        'weixin': function () {
          return Mock.Random.first() + Mock.Random.last()
        },
        'qr': 'http://www.oushidai.com/static/upload/2016/01/22/20160122185637000000_1_158648_39.jpg',
        'email': function () {
          return Mock.Random.email('gmail.com')
        }
      }
    })
    /**
     * 活动筛选接口
     */
    Mock.mock(/\/activity\/ajax\/get_filter(.*)/, 'post', {
      'error': '1000',
      'errmsg': '成功',
      'data': {
        'categories|1-5': [{
          'title': function () {
            return Mock.Random.ctitle(1, 5)
          },
          'name': 'activity-home',
          'category': function () {
            return Mock.Random.word(2, 4)
          }
        }],
        'loc|2-4': [ () => Mock.Random.cword(2, 4) ],
        'act': [{
          'text': '全部活动',
          'value': 'all'
        }, {
          'text': '机构活动',
          'value': 'org'
        }, {
          'text': '个人活动',
          'value': 'personal'
        }]
      }
    })
    /**
     * 资讯筛选接口
     */
    Mock.mock(/\/information\/ajax\/get_filter(.*)/, 'post', {
      'error': '1000',
      'errmsg': '成功',
      'data': {
        'categories|1-5': [{
          'title': function () {
            return Mock.Random.ctitle(1, 5)
          },
          'name': 'news-home',
          'category': function () {
            return Mock.Random.word(2, 4)
          }
        }],
        'tags|2-10': [{
          'title': () => Mock.Random.ctitle(1, 5),
          'name': 'news-home',
          'id': Mock.Random.integer(10, 100000)
        }]
        // 'loc|2-4': [ () => Mock.Random.city ],
        // 'act|2-4': [ () => Mock.Random.cword(2, 4) ]
      }
    })
    /**
     * app接口
     */
    Mock.mock(/\/app\/ajax\/link(.*)/, 'post', {
      'error': '1000',
      'errmsg': '成功',
      'data': {
        link: 'http://www.oushidai.com'
      }
    })
    /**
     * 吐槽建议
     */
    Mock.mock(/\/feedback\/ajax(.*)/, 'post', {
      'error': '1000',
      'errmsg': '成功',
      'data': {}
    })
    // ==== 模拟数据 end ====
  }
}
