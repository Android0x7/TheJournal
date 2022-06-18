using System;
using System.Linq;
using System.Collections;
using Microsoft.AspNetCore.Mvc;
using JournalAPI.Services;
using JournalAPI.Models;
using System.Threading.Tasks;
using System.Collections.Generic;

namespace JournalAPI.Controllers; 

[Controller]
[Route("api/[controller]")]
public class JournalController: Controller {
    
    private readonly MongoDBService _mongoDBService;
    public JournalController(MongoDBService mongoDBService) 
    {
        _mongoDBService = mongoDBService;
    }
        
    [HttpGet]
    public async Task<List<JournalEntry>> Get()
    {
        return await this._mongoDBService.GetJournalsAsync();
    }

    // [HttpPost]
    // public async Task<IActionResult> Post([FromBody] Playlist playlist) {}

    // [HttpPut("{id}")]
    // public async Task<IActionResult> AddToPlaylist(string id, [FromBody] string movieId) {}

    // [HttpDelete("{id}")]
    // public async Task<IActionResult> Delete(string id) {}

}