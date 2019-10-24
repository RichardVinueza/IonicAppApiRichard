package com.tarde.hotelapi.controllers;
import java.util.List;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

import com.tarde.hotelapi.entity.models.Hotel;
import com.tarde.hotelapi.entity.services.IHotelService;


@RestController
@CrossOrigin(origins="*")
public class HotelController {
	
	@Autowired
	private IHotelService hotelService;
	
	@GetMapping("/api/gethotel")
	private List<Hotel> getHotels(){
		return hotelService.getAllHotels();
	}
	
	@GetMapping("/api/getOneHotel/{id}")
	private Hotel getOne(@PathVariable(value = "id") long id) {
		return hotelService.getOneHotel(id);	
	}	
	
	@PostMapping("/api/posthotel")
	private void addHotel(Hotel hotel) {
		hotelService.addHotel(hotel);
	}
	
	
	
	@DeleteMapping("/api/deletehotel/{id}")
	private void deleteHotel(@PathVariable(value = "id") long id) {
		hotelService.delete(id);
	}
	
	@PutMapping("/api/updatehotel/{id}")
	private void updated(Hotel hotel, @PathVariable(value = "id")long id ) {
		hotelService.put(hotel, id);
	}

}
