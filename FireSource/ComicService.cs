using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Net;
using FireSource.Models;
using Marvelous;
using Newtonsoft.Json;

namespace FireSource
{
    public class ComicService:IComicService
    {
        private const string SERVICE_URL = "http://gateway.marvel.com:80/v1/public/";
        private const string API_KEY = "4a192e06c6041b84da04fac1ce6f6b63";

        public IEnumerable<Hero> GetHeroes(string letter)
        {
            var marvel = new MarvelClient(API_KEY, ConfigurationManager.AppSettings.Get("PrivateMarvel"));
            var list = new List<Hero>();
            var characters = marvel.Characters.FindAll(20,0,new NameValueCollection { { "nameStartsWith",letter}});
            ((Newtonsoft.Json.Linq.JArray)characters.data.results).ToList().ForEach(c=>list.Add(new Hero {Id = (int)c["id"],Name = (string)c["name"],Description = (string)c["description"], Thumbnail =c["thumbnail"].HasValues? (string)c["thumbnail"]["path"]+"."+(string)c["thumbnail"]["extension"]: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg" }));
            return list;
            //            var url = $"{SERVICE_URL}characters?nameStartsWith={letter}{API_KEY}";
            //            var request = (HttpWebRequest)HttpWebRequest.Create(url);
            //            request.ContentType = "application/json; charset=utf-8";
            ////            request.Accept = "application/json, text/javascript, */*";
            //            request.Method = "GET";
            //            request.ContentLength = 0;
            //     
            //            WebResponse response = request.GetResponse();
            //            Stream stream = response.GetResponseStream();
            //            string json = "";
            //
            //            using (var reader = new StreamReader(stream))
            //            {
            //                while (!reader.EndOfStream)
            //                {
            //                    json = reader.ReadToEnd();
            //                    var parsed = JsonConvert.DeserializeObject<dynamic>(json);
            ////                    parsed.data.results.Select(
            ////                        s =>
            ////                        {
            ////                            return new Hero
            ////                            {
            ////                                Name = s.name,
            ////                                Description = s.description,
            ////                                Thumbnail = s.thumbnail.path + "." + s.thumbnail.extension
            ////                            }
            ////                        });
            //                }
            //            }
            //            return new List<Hero>();
        }

    }
}